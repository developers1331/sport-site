import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramService } from 'src/app/general/services/program.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { IDirectionProgram } from 'src/app/modules/programs/shared/interfaces';

@Component({
    selector: 'app-program-direction-edit',
    templateUrl: './program-direction-edit.component.html',
    styleUrls: ['./program-direction-edit.component.scss'],
})
export class ProgramDirectionEditComponent implements OnInit {
    public form!: FormGroup;
    constructor(
        private programService: ProgramService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            direction: new FormControl(null, Validators.required),
            bgImageDirection: new FormControl(null, Validators.required),
        });
    }

    public submit() {
        if (this.form.invalid) {
            return;
        }

        const programImage: IDirectionProgram = {
            direction: this.form.value.direction,
            bgImageDirection: this.form.value.bgImageDirection,
            text: this.checkNameDiretcion(this.form.value.direction),
        };

        this.programService
            .postProgramDirectionImage(programImage)
            .subscribe(() => {
                this.form.reset();
                this.alert.succes('Картинка изменена!');
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
