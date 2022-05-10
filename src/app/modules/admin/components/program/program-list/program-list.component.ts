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
}
