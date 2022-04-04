import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    @Input() post!: IPost;

    constructor() {}

    public stripDescriptionText(text: any): string {
        return text.replace(/<\/?[^>]+>/g, '').replace(/\&nbsp\;/gi, ' ');
    }
}
