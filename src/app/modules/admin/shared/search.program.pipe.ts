import { Pipe, PipeTransform } from '@angular/core';
import { IProgram } from 'src/app/modules/programs/shared/interfaces';

@Pipe({
    name: 'searchProgram',
})
export class SearchProgramPipe implements PipeTransform {
    transform(program: IProgram[], search = ''): IProgram[] {
        if (!search.trim()) {
            return program;
        }

        return program.filter((program) => {
            return program.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
