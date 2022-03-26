import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-btn',
  templateUrl: './footer-btn.component.html',
  styleUrls: ['./footer-btn.component.scss'],
})
export class FooterBtnComponent {
  @Input() routLink: string = '';
  @Input() text: string = '';
  @Input() hrefLink: string = '12';
  @Input() target: string = '';
  @Input() targetBtn: string = '';

  constructor() {}
}
