import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-menu-btn',
    templateUrl: './home-menu-btn.component.html',
    styleUrls: ['./home-menu-btn.component.scss'],
})
export class HomeMenuBtnComponent {
    @Input() direction: string = '';
    @Input() open: boolean = false;
    @Input() isShow: boolean = false;

    constructor() {}
}
