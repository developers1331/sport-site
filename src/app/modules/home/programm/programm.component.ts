import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  programmsConfig,
  IprogrammsConfig,
  Iprogramms,
} from 'src/app/modules/home/programm/programm-params';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.scss'],
})
export class ProgrammComponent implements OnInit, OnDestroy {
  public programConfig: IprogrammsConfig[] = programmsConfig;
  public id: number = 0;
  public currentConfig: Iprogramms[] = [];
  private destroy$ = new Subject<void>();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.homeId$.pipe(takeUntil(this.destroy$)).subscribe((id) => {
      this.id = id;
      this.getConfig(this.id);
    });
    this.getConfig(this.id);
  }

  public getConfig(id: number) {
    this.programConfig.forEach((element) => {
      if (element.id === id) {
        this.currentConfig = element.programms;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
