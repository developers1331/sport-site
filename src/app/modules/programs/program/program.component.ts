import { Component, OnInit } from '@angular/core';
import { IProgramm, programmData } from './program.params';

@Component({
    selector: 'app-program',
    templateUrl: './program.component.html',
    styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
    public programType: IProgramm[] = programmData;

    constructor() {}

    ngOnInit(): void {
        console.log('todo');
    }
}
