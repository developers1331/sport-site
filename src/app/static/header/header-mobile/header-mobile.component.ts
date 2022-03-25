import { Component, Input } from '@angular/core';
import { Ibtns, dataBtns } from 'src/app/static/header/header.params';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  @Input() isActive: boolean = false;
  public btns: Ibtns[] = dataBtns;

  constructor() {}
}
