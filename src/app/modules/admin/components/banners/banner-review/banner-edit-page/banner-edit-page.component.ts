import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { BannersService } from 'src/app/general/services/banners.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';

@Component({
    selector: 'app-banner-edit-page',
    templateUrl: './banner-edit-page.component.html',
    styleUrls: ['./banner-edit-page.component.scss'],
})
export class BannerEditPageComponent implements OnInit, OnDestroy {
    public form!: FormGroup;
    public banner!: any;
    public submitted: boolean = false;
    private uSub!: Subscription;
    constructor(
        private bannerService: BannersService,
        private alert: AlertService,
        private route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.route.params
            .pipe(
                switchMap((params: Params) => {
                    return this.bannerService.getReviewsBlockById(params['id']);
                })
            )
            .subscribe((banner: any) => {
                this.banner = banner;
                this.form = new FormGroup({
                    fullName: new FormControl(
                        banner.fullName,
                        Validators.required
                    ),
                    description: new FormControl(
                        banner.description,
                        Validators.required
                    ),
                    photoUrl: new FormControl(
                        banner.photoUrl,
                        Validators.required
                    ),
                    bgImageUrl: new FormControl(
                        banner.bgImageUrl,
                        Validators.required
                    ),
                });
            });
    }

    public submit(): void {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;

        this.uSub = this.bannerService
            .uppdateReviewBlock({
                ...this.banner,
                fullName: this.form.value.fullName,
                description: this.form.value.description,
                photoUrl: this.form.value.photoUrl,
                bgImageUrl: this.form.value.bgImageUrl,
            })
            .subscribe(() => {
                this.submitted = false;
                this.alert.succes('Баннер был изменен.');
            });
    }

    public ngOnDestroy(): void {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    }
}
