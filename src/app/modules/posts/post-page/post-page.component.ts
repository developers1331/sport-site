import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PostsService } from 'src/app/general/services/posts.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
    public post$!: Observable<IPost>;

    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService
    ) {}

    ngOnInit(): void {
        this.post$ = this.route.params.pipe(
            switchMap((params: Params) => {
                return this.postsService.getById(params['id']);
            })
        );
    }
}
