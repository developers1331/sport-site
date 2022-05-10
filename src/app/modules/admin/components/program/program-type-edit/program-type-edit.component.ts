import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramService } from 'src/app/general/services/program.service';
import { AlertService } from 'src/app/modules/admin/services/alert.service';
import { ITypeProgram } from 'src/app/modules/programs/shared/interfaces';

@Component({
    selector: 'app-program-type-edit',
    templateUrl: './program-type-edit.component.html',
    styleUrls: ['./program-type-edit.component.scss'],
})
export class ProgramTypeEditComponent implements OnInit {
    public form!: FormGroup;
    constructor(
        private programService: ProgramService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            type: new FormControl(null, Validators.required),
            bgImageType: new FormControl(null, Validators.required),
        });
    }

    public submit() {
        if (this.form.invalid) {
            return;
        }

        const programImage: ITypeProgram = {
            type: this.form.value.type,
            bgImageType: this.form.value.bgImageType,
            text: this.checkNameType(this.form.value.type),
        };

        this.programService.postProgramTypeImage(programImage).subscribe(() => {
            this.form.reset();
            this.alert.succes('Картинка изменена!');
        });
    }

    private checkNameType(type: string): string {
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
