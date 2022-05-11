import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsWrapperComponent } from './programs-direction/programs-wrapper.component';
import { ProgramTypeComponent } from './program-type/program.component';
import { RouterModule } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
import { QuillModule } from 'ngx-quill';
import { ProgramComponent } from 'src/app/modules/programs/program/program.component';

@NgModule({
    declarations: [
        ProgramsWrapperComponent,
        ProgramTypeComponent,
        ProgramListComponent,
        ProgramComponent,
    ],
    imports: [CommonModule, RouterModule, SharedModuleModule, QuillModule],
    exports: [ProgramsWrapperComponent, ProgramTypeComponent],
})
export class ProgramsModule {}
