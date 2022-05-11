import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProgramService } from 'src/app/general/services/program.service';
import _filter from 'lodash-es/filter';
interface FilterType {
    direction: string;
    type: string;
}
@Component({
    selector: 'app-program-list',
    templateUrl: './program-list.component.html',
    styleUrls: ['./program-list.component.scss'],
})
export class ProgramListComponent implements OnInit {
    public programListData: any = undefined;
    private filterType!: FilterType;

    constructor(
        private programService: ProgramService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            const paramDirection = params['direction'];
            const paramType = params['type'];
            this.filterType = {
                direction: paramDirection,
                type: paramType,
            };
        });
        this.programService.dataProgam$.subscribe((data) => {
            this.programListData = data;
            this.filterProgram();
        });
    }

    private filterProgram(): void {
        this.programListData = _filter(this.programListData, {
            direction: this.filterType.direction,
            type: this.filterType.type,
        });
    }
}
