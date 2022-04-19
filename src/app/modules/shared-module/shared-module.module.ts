import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/static/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannersService } from 'src/app/general/services/banners.service';

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, BrowserAnimationsModule],
    exports: [LoaderComponent, BrowserAnimationsModule],
    providers: [BannersService],
})
export class SharedModuleModule {}
