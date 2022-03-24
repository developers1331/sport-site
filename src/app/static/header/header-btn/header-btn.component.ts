import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-btn',
  templateUrl: './header-btn.component.html',
  styleUrls: ['./header-btn.component.scss'],
})
export class HeaderBtnComponent {
  @Input() text: string = '';
  @Input() hrefLink: string = '';

  constructor() {}
}
