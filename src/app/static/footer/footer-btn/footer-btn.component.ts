import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-btn',
  templateUrl: './footer-btn.component.html',
  styleUrls: ['./footer-btn.component.scss'],
})
export class FooterBtnComponent implements OnInit {
  @Input() routLink: string = '';
  @Input() text: string = '';
  @Input() hrefLink: string = '12';
  @Input() target: string = '';
  @Input() targetBtn: string = '';

  public defaultBtns: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.checkTarget(this.targetBtn);
  }

  private checkTarget(target: string): void {
    if (target === 'router') {
      this.defaultBtns = false;
    }
  }
}
