import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/general/services/program.service';

@Component({
    selector: 'app-programs-wrapper',
    templateUrl: './programs-wrapper.component.html',
    styleUrls: ['./programs-wrapper.component.scss'],
})
export class ProgramsWrapperComponent implements OnInit {
    public programsDiretcion: any;
    constructor(private programService: ProgramService) {}

    ngOnInit(): void {
        this.programService.getDirectionProgram().subscribe((data) => {
            this.programsDiretcion = data;
        });
    }
}
