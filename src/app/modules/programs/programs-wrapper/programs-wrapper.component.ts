import { Component, OnInit } from '@angular/core';
import { IProgramms, programmsData } from './programms-wrapper.params';

@Component({
    selector: 'app-programs-wrapper',
    templateUrl: './programs-wrapper.component.html',
    styleUrls: ['./programs-wrapper.component.scss'],
})
export class ProgramsWrapperComponent implements OnInit {
    public programms: IProgramms[] = programmsData;

    constructor() {}

    ngOnInit(): void {
        console.log('todo');
    }
}
