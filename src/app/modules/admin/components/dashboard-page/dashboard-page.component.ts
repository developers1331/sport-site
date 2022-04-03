import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/general/services/posts.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
    public posts: IPost[] = [];
    public searchStr: string = '';
    private pSub!: Subscription;
    private dSub!: Subscription;

    constructor(
        private postService: PostsService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.pSub = this.postService.getAllPosts().subscribe((posts) => {
            this.posts = posts;
        });
    }

    public remove(id: any) {
        this.postService.deletePost(id).subscribe(() => {
            this.posts = this.posts.filter((post) => post.id !== id);
            this.alert.danger('Пост был удален.');
        });
    }

    ngOnDestroy(): void {
        if (this.pSub) {
            this.pSub.unsubscribe();
        }

        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    }
}
