import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AboutWrapperComponent } from './about-wrapper/about-wrapper.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
@NgModule({
  declarations: [
    AboutWrapperComponent,
    TrainersListComponent,
    ReviewsComponent,
  ],
  imports: [CommonModule, IvyCarouselModule],
  exports: [AboutWrapperComponent, TrainersListComponent],
})
export class AboutModule {}
