import { Component, OnInit } from '@angular/core';
import {
    programmsConfig,
    IprogrammsConfig,
    Iprogramms,
} from 'src/app/modules/home/programm/programm-params';

@Component({
    selector: 'app-program-list',
    templateUrl: './program-list.component.html',
    styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
    public programList: IprogrammsConfig[] = programmsConfig;

    constructor() {}

    ngOnInit(): void {
        console.log('init');
    }
}
