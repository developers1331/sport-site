import { Component, OnDestroy, OnInit } from '@angular/core';
import { BannersService } from 'src/app/general/services/banners.service';
import { IReviewBanner } from 'src/app/modules/admin/shared/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
// install Swiper modules
@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();
    public bannerReview: IReviewBanner[] = [];

    constructor(private bannerService: BannersService) {}

    ngOnInit(): void {
        this.bannerService
            .getReviewsBlock()
            .pipe(takeUntil(this.destroy$))
            .subscribe((blocks: IReviewBanner[]): void => {
                this.bannerReview = blocks;
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
