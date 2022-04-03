import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLoayoutComponent } from 'src/app/modules/admin/components/admin-loayout/admin-loayout.component';
import { LoginPageComponent } from 'src/app/modules/admin/components/login-page/login-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
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
        AlertComponent,
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
                ],
            },
        ]),
    ],
    exports: [RouterModule],
    providers: [AuthGuard, PostsService, AlertService, INTERCEPTOR_PROVIDER],
})
export class AdminModule {}
