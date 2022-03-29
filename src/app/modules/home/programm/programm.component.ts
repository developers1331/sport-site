import { Component, Input, OnInit } from '@angular/core';
import {
  dataProgramms,
  Iprogramms,
} from 'src/app/modules/home/programm/programm-params';

@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.scss'],
})
export class ProgrammComponent implements OnInit {
  @Input() img_webp: string = '';
  @Input() img_jpg: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('init programms');
  }
}
