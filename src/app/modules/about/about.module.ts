import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutWrapperComponent } from './about-wrapper/about-wrapper.component';

@NgModule({
  declarations: [AboutWrapperComponent],
  imports: [CommonModule],
  exports: [AboutWrapperComponent],
})
export class AboutModule {}
