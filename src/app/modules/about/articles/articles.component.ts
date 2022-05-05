import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/general/services/posts.service';
import {
    IarticlesPost,
    articlesData,
} from 'src/app/modules/about/articles/articles.params';
import { IPost } from 'src/app/modules/admin/shared/interfaces';
@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
    public articlesConfig: IarticlesPost[] = articlesData;
    public posts$: Observable<IPost[]> = this.postService.getAllPosts();
    public postsConfig: IPost[] = [];
    public ready = false;
    constructor(private postService: PostsService, private router: Router) {}

    public async ngOnInit(): Promise<void> {
        this.getLastsPosts();
    }

    public getLastsPosts() {
        this.posts$.subscribe((posts: IPost[]): void => {
            this.postsConfig = posts.slice(-3);
            this.ready = true;
        });
    }

    public goToInfo(id?: string) {
        this.router.navigate(['/post', id]);
    }

    public stripDescriptionText(text: any): string {
        return text.replace(/<\/?[^>]+>/g, '').replace(/\&nbsp\;/gi, ' ');
    }
}
