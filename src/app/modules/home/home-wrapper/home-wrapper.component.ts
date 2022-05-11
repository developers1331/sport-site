import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Ipluses, dataPluses } from 'src/app/modules/home/pluses/pluses.params';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {
    Ipage,
    dataPage,
    Imenu,
    dataMenu,
} from 'src/app/modules/home/home-wrapper/home-wrapper-params';
import {
    Itrainers,
    dataTrainers,
} from 'src/app/modules/home/trainer/trainer-params';

@Component({
    selector: 'app-home-wrapper',
    templateUrl: './home-wrapper.component.html',
    styleUrls: ['./home-wrapper.component.scss'],
})
export class HomeWrapperComponent implements OnInit, OnDestroy {
    public dataPage2: Ipage[] = dataPage;
    public dataTrainers2: Itrainers[] = dataTrainers;
    public dataMenu2: Imenu[] = dataMenu;
    private destroy$ = new Subject<void>();

    public currentId: number = 0;
    public dataPluses2: Ipluses[] = dataPluses;
    public isToggleShow: boolean = false;

    constructor(private readonly homeService: HomeService) {}

    public ngOnInit(): void {
        this.homeService.homeId$
            .pipe(takeUntil(this.destroy$))
            .subscribe((id) => {
                this.currentId = id;
            });
        this.resetOpen();
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public toggle(id: number): void {
        this.homeService.changeId(id);

        this.dataMenu2.forEach((element) => {
            if (element.id === this.currentId) {
                element.open = true;
            } else {
                element.open = false;
            }
        });
        this.toggleShow();
    }

    public toggleShow(): void {
        this.isToggleShow = !this.isToggleShow;
    }

    private resetOpen(): void {
        this.dataMenu2.forEach((element) => {
            if (element.id === 0) {
                element.open = true;
            } else {
                element.open = false;
            }
        });
    }
}
