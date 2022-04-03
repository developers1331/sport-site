import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/general/services/posts.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';

@Component({
    selector: 'app-create-page',
    templateUrl: './create-page.component.html',
    styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
    public form!: FormGroup;
    constructor(
        private postService: PostsService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            title: new FormControl(null, Validators.required),
            text: new FormControl(null, Validators.required),
            author: new FormControl(null, Validators.required),
        });
    }

    public submit() {
        if (this.form.invalid) {
            return;
        }

        const post: IPost = {
            title: this.form.value.title,
            author: this.form.value.author,
            text: this.form.value.text,
            date: new Date(),
        };

        this.postService.create(post).subscribe(() => {
            this.form.reset();
            this.alert.succes('Пост удачно создан!');
        });
    }
}
