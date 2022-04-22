import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterBtnComponent } from './static/footer/footer-btn/footer-btn.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';
import { HeaderBtnComponent } from './static/header/header-btn/header-btn.component';
import { HeaderMobileComponent } from './static/header/header-mobile/header-mobile.component';
import { HeaderMobileBtnComponent } from './static/header/header-mobile/header-mobile-btn/header-mobile-btn.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './static/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from 'src/app/modules/posts/posts.module';
import { ProgramsModule } from 'src/app/modules/programs/programs.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { AboutModule } from 'src/app/modules/about/about.module';
import { TermsPageComponent } from './static/terms-page/terms-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthService } from 'src/app/modules/admin/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { PostsService } from 'src/app/general/services/posts.service';
import { AuthInterceptor } from 'src/app/general/shared/auth.interceptor';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import { ScrollToTopComponent } from './static/scroll-to-top/scroll-to-top.component';

registerLocaleData(ruLocale, 'ru');

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor,
};
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FooterBtnComponent,
        PageNotFoundComponent,
        HeaderBtnComponent,
        HeaderMobileComponent,
        HeaderMobileBtnComponent,
        ModalComponent,
        TermsPageComponent,
        MainLayoutComponent,
        ScrollToTopComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PostsModule,
        ProgramsModule,
        AboutModule,
        HttpClientModule,
        QuillModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        ModalModule.forRoot(),
        HomeModule,
    ],
    providers: [AuthService, PostsService, INTERCEPTOR_PROVIDER],
    bootstrap: [AppComponent],
    exports: [QuillModule],
})
export class AppModule {}
