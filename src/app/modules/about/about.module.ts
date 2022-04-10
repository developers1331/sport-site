import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutWrapperComponent } from './about-wrapper/about-wrapper.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ArticlesComponent } from './articles/articles.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
@NgModule({
    declarations: [
        AboutWrapperComponent,
        TrainersListComponent,
        ReviewsComponent,
        ArticlesComponent,
    ],
    imports: [CommonModule, SwiperModule, SharedModuleModule],
    exports: [AboutWrapperComponent, TrainersListComponent],
})
export class AboutModule {}
