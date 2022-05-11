import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/static/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannersService } from 'src/app/general/services/banners.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, BrowserAnimationsModule, RouterModule],
    exports: [LoaderComponent, BrowserAnimationsModule, RouterModule],
    providers: [BannersService],
})
export class SharedModuleModule {}
