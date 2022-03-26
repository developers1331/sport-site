import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterBtnComponent } from './static/footer/footer-btn/footer-btn.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderBtnComponent } from './static/header/header-btn/header-btn.component';
import { HeaderMobileComponent } from './static/header/header-mobile/header-mobile.component';
import { HeaderMobileBtnComponent } from './static/header/header-mobile/header-mobile-btn/header-mobile-btn.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from 'src/app/modules/posts/posts.module';
import { ProgramsModule } from 'src/app/modules/programs/programs.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { AboutModule } from 'src/app/modules/about/about.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PostsModule,
    ProgramsModule,
    AboutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ModalModule.forRoot(),
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
