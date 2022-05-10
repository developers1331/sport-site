import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/main-layout/main-layout.component';
import { AboutWrapperComponent } from 'src/app/modules/about/about-wrapper/about-wrapper.component';
import { HomeWrapperComponent } from 'src/app/modules/home/home-wrapper/home-wrapper.component';
import { PostPageComponent } from 'src/app/modules/posts/post-page/post-page.component';
import { PostsWrapperComponent } from 'src/app/modules/posts/posts-wrapper/posts-wrapper.component';
import { ProgramComponent } from 'src/app/modules/programs/program/program.component';
import { ProgramsWrapperComponent } from 'src/app/modules/programs/programs-direction/programs-wrapper.component';
import { PageNotFoundComponent } from 'src/app/static/page-not-found/page-not-found.component';
import { TermsPageComponent } from 'src/app/static/terms-page/terms-page.component';
import { ProgramListComponent } from './modules/programs/program-list/program-list.component';
import { ProgramTypeComponent } from './modules/programs/program-type/program.component';

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
                path: 'program/:id',
                component: ProgramComponent,
            },
            {
                path: 'programs/:direction',
                component: ProgramTypeComponent,
            },
            {
                path: 'programs/:direction/:type',
                component: ProgramListComponent,
            },
            {
                path: 'posts',
                component: PostsWrapperComponent,
            },
            {
                path: 'post/:id',
                component: PostPageComponent,
            },
            {
                path: 'program-list',
                component: ProgramListComponent,
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
