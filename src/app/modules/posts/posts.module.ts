import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsWrapperComponent } from './posts-wrapper/posts-wrapper.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PostsWrapperComponent, PostComponent],
    imports: [CommonModule, RouterModule],
    exports: [PostsWrapperComponent, PostComponent],
})
export class PostsModule {}
