import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProgramService } from 'src/app/general/services/program.service';
import { IProgram } from 'src/app/modules/programs/shared/interfaces';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
    public programData!: IProgram;
    private idProgram = '';
    constructor(
        private programService: ProgramService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProgram = params['id'];
        });
        this.programService.getProgramById(this.idProgram).subscribe((data) => {
            this.programData = data;
        });
    }
}
