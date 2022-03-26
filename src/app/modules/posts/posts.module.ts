import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsWrapperComponent } from './posts-wrapper/posts-wrapper.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PostsWrapperComponent, PostComponent],
  imports: [CommonModule],
  exports: [PostsWrapperComponent, PostComponent],
})
export class PostsModule {}
