import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLoayoutComponent } from 'src/app/modules/admin/components/admin-loayout/admin-loayout.component';
import { LoginPageComponent } from 'src/app/modules/admin/components/login-page/login-page.component';
import { CreatePageComponent } from './components/create-post-page/create-page.component';
import { EditPageComponent } from './components/edit-post-page/edit-post-page.component';
import { DashboardPageComponent } from 'src/app/modules/admin/components/dashboard-page/dashboard-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'src/app/modules/admin/services/auth.guard.service';
import { QuillModule } from 'ngx-quill';
import { PostsService } from 'src/app/general/services/posts.service';
import { AuthInterceptor } from 'src/app/general/shared/auth.interceptor';
import { SearchPipe } from 'src/app/modules/admin/shared/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { BannerCreatePageComponent } from './components/banners/banner-review/banner-create-page/banner-create-page.component';
import { BannersComponent } from './components/banners/banner-review/banners/banners.component';
import { BannerEditPageComponent } from './components/banners/banner-review/banner-edit-page/banner-edit-page.component';
import { BannerListComponent } from 'src/app/modules/admin/components/banners/banner-list/banner-list.component';
import { BannerHeaderComponent } from './components/banners/banner-header/banner-header.component';
import { SearchBannerPipe } from 'src/app/modules/admin/shared/search.banner.pipe';
const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor,
};
@NgModule({
    declarations: [
        AdminLoayoutComponent,
        LoginPageComponent,
        CreatePageComponent,
        EditPageComponent,
        DashboardPageComponent,
        SearchPipe,
        SearchBannerPipe,
        AlertComponent,
        BannerCreatePageComponent,
        BannersComponent,
        BannerEditPageComponent,
        BannerListComponent,
        BannerHeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        QuillModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: AdminLoayoutComponent,
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/login',
                        pathMatch: 'full',
                    },
                    {
                        path: 'login',
                        component: LoginPageComponent,
                    },
                    {
                        path: 'dashboard',
                        component: DashboardPageComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'create-post',
                        component: CreatePageComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'post/:id/edit',
                        component: EditPageComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'banners-list',
                        component: BannerListComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'create-review-banner',
                        component: BannerCreatePageComponent,
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'banner-review/:id/edit',
                        component: BannerEditPageComponent,
                        canActivate: [AuthGuard],
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
    providers: [AuthGuard, PostsService, AlertService, INTERCEPTOR_PROVIDER],
})
export class AdminModule {}
