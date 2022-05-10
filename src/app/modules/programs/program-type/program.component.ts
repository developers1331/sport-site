import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProgramService } from 'src/app/general/services/program.service';

@Component({
    selector: 'app-type-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss'],
})
export class ProgramTypeComponent implements OnInit {
    public programsType: any;
    public direction: string = '';
    public title: string = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private programService: ProgramService
    ) {}
    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            const paramDirection = params['direction'];
            this.direction = paramDirection;
            this.title = this.checkNameDiretcion(paramDirection);
        });
        this.programService.getTypeProgram().subscribe((data) => {
            this.programsType = data;
        });
    }

    private checkNameDiretcion(type: string): string {
        let name = '';
        switch (type) {
            case 'home':
                name = 'Домашняя';
                break;
            case 'bodybuilding':
                name = 'Бодибилдинг';
                break;
            case 'powerlifting':
                name = 'Паэерлифтинг';
                break;
            case 'crossfit':
                name = 'Кроссфит';
                break;
            case 'workout':
                name = 'Воркаут';
                break;

            default:
                break;
        }
        return name;
    }
}
