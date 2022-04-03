import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/general/services/posts.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';
@Component({
    selector: 'app-posts-wrapper',
    templateUrl: './posts-wrapper.component.html',
    styleUrls: ['./posts-wrapper.component.scss'],
})
export class PostsWrapperComponent implements OnInit {
    public posts$!: Observable<IPost[]>;
    constructor(private postService: PostsService) {}

    ngOnInit(): void {
        this.posts$ = this.postService.getAllPosts();
    }
}
