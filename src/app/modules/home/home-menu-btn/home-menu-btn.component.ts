import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-menu-btn',
    templateUrl: './home-menu-btn.component.html',
    styleUrls: ['./home-menu-btn.component.scss'],
})
export class HomeMenuBtnComponent implements OnInit {
    @Input() direction: string = '';
    @Input() id: string = '';
    @Input() open: boolean = false;
    @Input() isActive: boolean = false;
    @Input() isShow: boolean = false;

    constructor() {}

    ngOnInit(): void {
        console.log('init');
    }
}
