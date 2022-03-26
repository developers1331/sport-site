import { Component, Input, OnInit } from '@angular/core';
import { Ipluses, dataPluses } from 'src/app/modules/home/pluses/pluses.params';

@Component({
  selector: 'app-pluses',
  templateUrl: './pluses.component.html',
  styleUrls: ['./pluses.component.scss'],
})
export class PlusesComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }
}
