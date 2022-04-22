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
    @Input() dataPage2: Ipage[] = dataPage;
    @Input() dataTrainers2: Itrainers[] = dataTrainers;
    @Input() dataMenu2: Imenu[] = dataMenu;
    private destroy$ = new Subject<void>();

    public currentId: number = 0;
    public dataPluses2: Ipluses[] = dataPluses;
    public isToggleShow: boolean = false;

    constructor(private readonly homeService: HomeService) {}

    ngOnInit(): void {
        this.homeService.homeId$
            .pipe(takeUntil(this.destroy$))
            .subscribe((id) => {
                this.currentId = id;
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggle(id: number) {
        this.dataMenu2[id].open = !this.dataMenu2[id].open;

        this.dataMenu2.forEach((element) => {
            if (element.id === id) {
                element.open = true;
            } else {
                element.open = false;
            }
        });
        this.homeService.changeId(id);
        this.toggleShow();
    }

    toggleShow() {
        this.isToggleShow = !this.isToggleShow;
    }
}
