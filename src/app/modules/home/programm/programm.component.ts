import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProgramService } from 'src/app/general/services/program.service';

import _filter from 'lodash-es/filter';

@Component({
    selector: 'app-programm',
    templateUrl: './programm.component.html',
    styleUrls: ['./programm.component.scss'],
})
export class ProgrammComponent implements OnInit, OnDestroy {
    public programData: any = undefined;
    public id: number = 0;

    private currentDirection: string = 'bodybuilding';
    private destroy$ = new Subject<void>();

    constructor(
        private homeService: HomeService,
        private programService: ProgramService
    ) {}

    public ngOnInit(): void {
        this.homeService.homeId$
            .pipe(takeUntil(this.destroy$))
            .subscribe((id) => {
                this.currentDirection = this.getCurrentDirection(id);

                this.programService.dataProgam$
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((data) => {
                        this.programData = _filter(data, {
                            direction: this.currentDirection,
                        }).slice(-6);
                    });
            });
    }

    public getCurrentDirection(id: number): string {
        let direction = '';
        switch (id) {
            case 0:
                direction = 'bodybuilding';
                break;
            case 1:
                direction = 'powerlifting';
                break;
            case 2:
                direction = 'crossfit';
                break;
            case 3:
                direction = 'workout';
                break;
            case 4:
                direction = 'home';
                break;
            default:
                break;
        }
        return direction;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
