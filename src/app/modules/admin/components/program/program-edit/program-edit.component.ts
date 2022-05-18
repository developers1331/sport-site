import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ProgramService } from 'src/app/general/services/program.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IProgram } from 'src/app/modules/programs/shared/interfaces';

@Component({
    selector: 'app-program-edit',
    templateUrl: './program-edit.component.html',
    styleUrls: ['./program-edit.component.scss'],
})
export class ProgramEditComponent implements OnInit, OnDestroy {
    public form!: FormGroup;
    public program!: IProgram;
    public submitted: boolean = false;
    private uSub!: Subscription;
    constructor(
        private alert: AlertService,
        private programService: ProgramService,
        private route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.route.params
            .pipe(
                switchMap((params: Params) => {
                    return this.programService.getProgramById(params['id']);
                })
            )
            .subscribe((program: IProgram) => {
                this.program = program;
                this.form = new FormGroup({
                    title: new FormControl(program.title, Validators.required),
                    bgImageProgram: new FormControl(
                        program.bgImageProgram,
                        Validators.required
                    ),
                    description: new FormControl(
                        program.description,
                        Validators.required
                    ),
                    direction: new FormControl(
                        program.direction,
                        Validators.required
                    ),
                    type: new FormControl(program.type, Validators.required),
                    text: new FormControl(program.text, Validators.required),
                });
            });
    }

    public submit(): void {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.uSub = this.programService
            .editProgram({
                ...this.program,
                title: this.form.value.title,
                bgImageProgram: this.form.value.bgImageProgram,
                description: this.form.value.description,
                direction: this.form.value.direction,
                type: this.form.value.type,
                text: this.form.value.text,
            })
            .subscribe(() => {
                this.submitted = false;
                this.alert.succes('Программа была изменена.');
            });
    }

    public ngOnDestroy(): void {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    }
}
