import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/admin/services/auth.service';
import { IUser } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    public form!: FormGroup;
    public submitted: boolean = false;
    public message: string = '';

    constructor(
        public auth: AuthService,
        private router: Router,
        private routGrd: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.routGrd.queryParams.subscribe((params: Params) => {
            if (params['loginAgain']) {
                this.message = 'Пожалуйста, введите данные:';
            } else if (params['authFailed']) {
                this.message = 'Сессия истекла, авторизуйтесь снова';
            }
        });
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.email,
                Validators.required,
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
            ]),
        });
    }

    public submit(): void {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        const user: IUser = {
            email: this.form.value.email,
            password: this.form.value.password,
        };

        this.auth.login(user).subscribe(
            () => {
                this.form.reset();
                this.router.navigate(['/admin', 'dashboard']);
                this.submitted = false;
            },
            () => {
                this.submitted = false;
            }
        );
    }
}
