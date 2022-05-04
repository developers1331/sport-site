import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/general/services/banners.service';
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
    constructor(private bannerService: BannersService) {}
    ngOnInit(): void {
        this.bannerService.getReviewsBlock().subscribe((banners) => {
            this.banners = banners;
            console.log(this.banners);
        });
    }

    public remove() {
        //todo
    }
}
