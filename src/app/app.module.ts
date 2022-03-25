import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterBtnComponent } from './static/footer/footer-btn/footer-btn.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderBtnComponent } from './static/header/header-btn/header-btn.component';
import { HeaderMobileComponent } from './static/header/header-mobile/header-mobile.component';
import { HeaderMobileBtnComponent } from './static/header/header-mobile/header-mobile-btn/header-mobile-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    FooterBtnComponent,
    PageNotFoundComponent,
    HeaderBtnComponent,
    HeaderMobileComponent,
    HeaderMobileBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
