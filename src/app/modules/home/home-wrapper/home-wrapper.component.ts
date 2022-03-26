import { Component, Input, OnInit } from '@angular/core';
import { Ipluses, dataPluses } from 'src/app/modules/home/pluses/pluses.params';
import {
  Ipage,
  dataPage,
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
export class HomeWrapperComponent implements OnInit {
  public imgMain: string = 'assets/images/exercise-1.jpg';
  public dataPluses2: Ipluses[] = dataPluses;
  @Input() dataPage2: Ipage[] = dataPage;
  @Input() dataTrainers2: Itrainers[] = dataTrainers;

  constructor() {}

  ngOnInit(): void {
    console.log('todo');
  }
}
