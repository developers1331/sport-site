import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/main-layout/main-layout.component';
import { AboutWrapperComponent } from 'src/app/modules/about/about-wrapper/about-wrapper.component';
import { HomeWrapperComponent } from 'src/app/modules/home/home-wrapper/home-wrapper.component';
import { PostComponent } from 'src/app/modules/posts/post/post.component';
import { PostsWrapperComponent } from 'src/app/modules/posts/posts-wrapper/posts-wrapper.component';
import { ProgramsWrapperComponent } from 'src/app/modules/programs/programs-wrapper/programs-wrapper.component';
import { PageNotFoundComponent } from 'src/app/static/page-not-found/page-not-found.component';
import { TermsPageComponent } from 'src/app/static/terms-page/terms-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/',
                pathMatch: 'full',
            },
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
                path: 'post/:id',
                component: PostComponent,
            },
            {
                path: 'terms',
                component: TermsPageComponent,
            },
        ],
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
