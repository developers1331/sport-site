import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AboutWrapperComponent } from './about-wrapper/about-wrapper.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ArticlesComponent } from './articles/articles.component';
@NgModule({
    declarations: [
        AboutWrapperComponent,
        TrainersListComponent,
        ReviewsComponent,
        ArticlesComponent,
    ],
    imports: [CommonModule, IvyCarouselModule],
    exports: [AboutWrapperComponent, TrainersListComponent],
})
export class AboutModule {}
