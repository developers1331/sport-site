import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannersService } from 'src/app/general/services/banners.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IReviewBanner } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-banner-create-page',
    templateUrl: './banner-create-page.component.html',
    styleUrls: ['./banner-create-page.component.scss'],
})
export class BannerCreatePageComponent implements OnInit {
    constructor(
        private bannerServiice: BannersService,
        private alert: AlertService
    ) {}
    public form!: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            fullName: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            photoUrl: new FormControl(null, Validators.required),
            bgImageUrl: new FormControl(null, Validators.required),
        });
    }

    public submit() {
        if (this.form.invalid) {
            return;
        }

        const banner: IReviewBanner = {
            fullName: this.form.value.fullName,
            description: this.form.value.description,
            photoUrl: this.form.value.photoUrl,
            bgImageUrl: this.form.value.bgImageUrl,
        };

        this.bannerServiice.addReviewBlock(banner).subscribe(() => {
            this.form.reset();
            this.alert.succes('Баннер с отзывом добавлен!');
        });
    }

    public test() {
        this.bannerServiice.getReviewsBlock().subscribe((elem: any) => {
            console.log(elem);
        });
    }
}
