import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsWrapperComponent } from './programs-wrapper/programs-wrapper.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [ProgramsWrapperComponent, ProgramComponent],
  imports: [CommonModule],
  exports: [ProgramComponent, ProgramsWrapperComponent],
})
export class ProgramsModule {}
