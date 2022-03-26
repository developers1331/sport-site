import { Component, OnInit } from '@angular/core';
import { IheadText, headConfig } from './about-wrapper.params';
@Component({
  selector: 'app-about-wrapper',
  templateUrl: './about-wrapper.component.html',
  styleUrls: ['./about-wrapper.component.scss'],
})
export class AboutWrapperComponent implements OnInit {
  public headParams: IheadText = headConfig;

  constructor() {}

  ngOnInit(): void {
    console.log('todo');
  }
}
