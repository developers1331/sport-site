import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/general/services/program.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IProgram } from 'src/app/modules/programs/shared/interfaces';

@Component({
    selector: 'app-program-list',
    templateUrl: './program-list.component.html',
    styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
    public helpText: string = 'Загрузка программ тренировок...';
    public programData: IProgram[] = [];
    public searchProgram: string = '';
    constructor(
        private programService: ProgramService,
        private alert: AlertService
    ) {}

    public ngOnInit(): void {
        this.programService.dataProgam$.subscribe((data) => {
            this.programData = data;
        });
    }

    public remove(id: any) {
        this.programService.removeProgram(id).subscribe(() => {
            this.programData = this.programData.filter(
                (program) => program.id !== id
            );
            this.alert.danger('Программа удалена');
        });
    }

    public checkNameDiretcion(type: string): string {
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

    public checkNameType(type: string): string {
        let name = '';
        switch (type) {
            case 'beginning':
                name = 'Начинающий';
                break;
            case 'advanced':
                name = 'Продвинутый';
                break;
            case 'professional':
                name = 'Профессионал';
                break;

            default:
                break;
        }
        return name;
    }
}
