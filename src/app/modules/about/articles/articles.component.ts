import { Component, OnInit } from '@angular/core';
import {
    IarticlesPost,
    articlesData,
} from 'src/app/modules/about/articles/articles.params';
@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
    public articlesConfig: IarticlesPost[] = articlesData;

    constructor() {}

    ngOnInit(): void {
        console.log('init');
    }

    public goToInfo(id: number) {
        console.log(id);
    }
}
