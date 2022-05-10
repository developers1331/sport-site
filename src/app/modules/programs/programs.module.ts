import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsWrapperComponent } from './programs-wrapper/programs-wrapper.component';
import { ProgramComponent } from './program/program.component';
import { RouterModule } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';

@NgModule({
    declarations: [
        ProgramsWrapperComponent,
        ProgramComponent,
        ProgramListComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [ProgramsWrapperComponent, ProgramComponent],
})
export class ProgramsModule {}
