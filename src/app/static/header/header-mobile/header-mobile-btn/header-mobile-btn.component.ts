import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-mobile-btn',
  templateUrl: './header-mobile-btn.component.html',
  styleUrls: ['./header-mobile-btn.component.scss'],
})
export class HeaderMobileBtnComponent {
  @Input() text: string = '';
  @Input() hrefLink: string = '';

  constructor() {}
}
