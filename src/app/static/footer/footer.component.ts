import { Component } from '@angular/core';
import { dataBtn, btns } from 'src/app/static/footer/footer.params';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}
  public dataBtns: btns = dataBtn;
}
