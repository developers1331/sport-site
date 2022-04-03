import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { PostsService } from 'src/app/general/services/posts.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
    public form!: FormGroup;
    public post!: IPost;
    public submitted: boolean = false;

    private uSub!: Subscription;
    constructor(
        private route: ActivatedRoute,
        private postService: PostsService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.route.params
            .pipe(
                switchMap((params: Params) => {
                    return this.postService.getById(params['id']);
                })
            )
            .subscribe((post: IPost) => {
                this.post = post;
                this.form = new FormGroup({
                    title: new FormControl(post.title, Validators.required),
                    text: new FormControl(post.text, Validators.required),
                });
            });
    }

    public submit() {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.uSub = this.postService
            .uppDatePost({
                ...this.post,
                text: this.form.value.text,
                title: this.form.value.title,
            })
            .subscribe(() => {
                this.submitted = false;
                this.alert.succes('Пост был обновлен.');
            });
    }

    ngOnDestroy(): void {
        if (this.uSub) {
            this.uSub.unsubscribe();
        }
    }
}
