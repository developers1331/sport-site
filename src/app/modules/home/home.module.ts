import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { SidebarComponent } from 'src/app/modules/home/sidebar/sidebar.component';
import { PlusesComponent } from 'src/app/modules/home/pluses/pluses.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { ProgrammComponent } from './programm/programm.component';
import { HomeMenuBtnComponent } from './home-menu-btn/home-menu-btn.component';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomeWrapperComponent,
        SidebarComponent,
        PlusesComponent,
        TrainerComponent,
        ProgrammComponent,
        HomeMenuBtnComponent,
    ],
    imports: [CommonModule, SharedModuleModule, RouterModule],
    providers: [HomeService],
    exports: [HomeWrapperComponent],
})
export class HomeModule {}
