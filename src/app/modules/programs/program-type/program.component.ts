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
            this.programsType = this.swapItem(this.programsType, 0, 1);
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
                name = 'Пауэрлифтинг';
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

    /*
     * костыль =)
     *todo переделать
     */
    private swapItem(
        arr: { [x: string]: any },
        idx: string | number,
        idxTwo: string | number
    ): any {
        const tmp = arr[idx];
        arr[idx] = arr[idxTwo];
        arr[idxTwo] = tmp;
        return arr;
    }
}
