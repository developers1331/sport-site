import { Component, Input, OnInit } from '@angular/core';
import {
  Itrainers,
  dataTrainers,
} from 'src/app/modules/home/trainer/trainer-params';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  @Input() dataTrainers2: Itrainers[] = dataTrainers;
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() direction: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }
}
