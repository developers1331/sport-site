import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutWrapperComponent } from 'src/app/modules/about/about-wrapper/about-wrapper.component';
import { HomeWrapperComponent } from 'src/app/modules/home/home-wrapper/home-wrapper.component';
import { PostsWrapperComponent } from 'src/app/modules/posts/posts-wrapper/posts-wrapper.component';
import { ProgramsWrapperComponent } from 'src/app/modules/programs/programs-wrapper/programs-wrapper.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeWrapperComponent,
  },
  {
    path: 'about',
    component: AboutWrapperComponent,
  },
  {
    path: 'programs',
    component: ProgramsWrapperComponent,
  },
  {
    path: 'posts',
    component: PostsWrapperComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}