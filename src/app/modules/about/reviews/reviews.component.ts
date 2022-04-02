import { Component, OnInit } from '@angular/core';
import { IswiperImage } from 'src/app/modules/about/reviews/reviews.params';

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
export class ReviewsComponent implements OnInit {
    public swiperImagePath: IswiperImage[] = [];

    constructor() {}

    ngOnInit(): void {
        this.swiperImagePath = [
            {
                imgPath: 'assets/images/swiper/swiper1.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
            {
                imgPath: 'assets/images/swiper/swiper2.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
            {
                imgPath: 'assets/images/swiper/swiper3.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
            {
                imgPath: 'assets/images/swiper/swiper4.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
            {
                imgPath: 'assets/images/swiper/swiper5.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
            {
                imgPath: 'assets/images/swiper/swiper6.jpg',
                imgFacePath: 'assets/images/swiper/swiper1_face.jpg',
                name: 'Денис Демин',
                textMsg:
                    'Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие? Ты знаешь что такое безумие?',
            },
        ];
    }
}
