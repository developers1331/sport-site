import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';

@NgModule({
  declarations: [HomeWrapperComponent],
  imports: [CommonModule],
  exports: [HomeWrapperComponent],
})
export class HomeModule {}
