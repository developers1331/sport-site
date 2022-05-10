import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/general/services/banners.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IReviewBanner } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
    public banners: IReviewBanner[] = [];
    public helpText: string = 'Загрузка баннеров...';
    public searchStr: string = '';
    constructor(
        private bannerService: BannersService,
        private alert: AlertService
    ) {}
    ngOnInit(): void {
        this.bannerService.getReviewsBlock().subscribe((banners) => {
            this.banners = banners;
        });
    }

    public remove(id: any) {
        this.bannerService.removeReviewBlock(id).subscribe(() => {
            this.banners = this.banners.filter((banner) => banner.id !== id);
            this.alert.danger('Баннер с отзывом удален.');
        });
    }
}
