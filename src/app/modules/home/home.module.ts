import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { SidebarComponent } from 'src/app/modules/home/sidebar/sidebar.component';
import { PlusesComponent } from 'src/app/modules/home/pluses/pluses.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SidebarBtnComponent } from './sidebar-btn/sidebar-btn.component';

@NgModule({
  declarations: [
    HomeWrapperComponent,
    SidebarComponent,
    PlusesComponent,
    TrainerComponent,
    SidebarBtnComponent,
  ],
  imports: [CommonModule],
  exports: [HomeWrapperComponent],
})
export class HomeModule {}
