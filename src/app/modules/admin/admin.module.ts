import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLoayoutComponent } from 'src/app/modules/admin/components/admin-loayout/admin-loayout.component';
import { LoginPageComponent } from 'src/app/modules/admin/components/login-page/login-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { DashboardPageComponent } from 'src/app/modules/admin/components/dashboard-page/dashboard-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AdminLoayoutComponent,
        LoginPageComponent,
        CreatePageComponent,
        EditPageComponent,
        DashboardPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
                    },
                    {
                        path: 'create-post',
                        component: CreatePageComponent,
                    },
                    {
                        path: 'post/:id/edit',
                        component: EditPageComponent,
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AdminModule {}
