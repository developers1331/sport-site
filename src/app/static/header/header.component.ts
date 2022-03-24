import { Component, OnInit } from '@angular/core';
import { dataBtns, Ibtns } from 'src/app/static/header/header.params';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;
  public btns: Ibtns[] = dataBtns;

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  public toggle() {
    this.isActive = !this.isActive;
  }
}
