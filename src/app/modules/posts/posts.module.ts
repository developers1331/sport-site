import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsWrapperComponent } from './posts-wrapper/posts-wrapper.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostsService } from 'src/app/general/services/posts.service';
import { PostPageComponent } from './post-page/post-page.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
    declarations: [PostsWrapperComponent, PostComponent, PostPageComponent],
    imports: [CommonModule, RouterModule, QuillModule],
    exports: [PostsWrapperComponent, PostComponent],
    providers: [PostsService],
})
export class PostsModule {}
