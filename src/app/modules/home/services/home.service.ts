import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public homeId$ = new Subject<number>();
  constructor() {}

  public changeId(id: number) {
    this.homeId$.next(id);
  }
}
