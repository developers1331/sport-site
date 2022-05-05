import { Component } from '@angular/core';
import { IheadText, headConfig } from './about-wrapper.params';
@Component({
    selector: 'app-about-wrapper',
    templateUrl: './about-wrapper.component.html',
    styleUrls: ['./about-wrapper.component.scss'],
})
export class AboutWrapperComponent {
    public headParams: IheadText = headConfig;

    constructor() {}
}
