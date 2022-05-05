import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
    public visible: boolean = false;

    @HostListener('window:scroll', []) onWindowScroll() {
        if (
            window.pageYOffset >= 1000 ||
            document.documentElement.scrollTop >= 1000
        ) {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    constructor() {}

    public scroll() {
        window.scroll(0, 0);
    }
}
