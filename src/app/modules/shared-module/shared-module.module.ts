import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/static/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule, BrowserAnimationsModule],
    exports: [LoaderComponent, BrowserAnimationsModule],
})
export class SharedModuleModule {}
