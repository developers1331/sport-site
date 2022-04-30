import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { BannersService } from 'src/app/general/services/banners.service';
import { AlertService } from '../../../services/alert.service';
import { IMainBanner } from '../../../shared/interfaces';

@Component({
    selector: 'app-banner-header',
    templateUrl: './banner-header.component.html',
    styleUrls: ['./banner-header.component.scss'],
})
export class BannerHeaderComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    public form!: FormGroup;

    constructor(
        private bannersService: BannersService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            textBanner: new FormControl('', Validators.required),
        });
        this.bannersService
            .getMainBannerText()
            .pipe(takeUntil(this.destroy$))
            .subscribe((value: IMainBanner) => {
                this.form.setValue({ textBanner: value.text });
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public submit() {
        this.bannersService
            .setMainBannerText({
                text: this.form.value.textBanner,
            })
            .subscribe(() => {
                this.form.reset();
                this.alertService.succes('Текст баннера обновлен');
            });
    }
}
