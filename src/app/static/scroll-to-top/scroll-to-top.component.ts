import {
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
    public visible: boolean = false;

    @HostListener('window:scroll', []) onWindowScroll() {
        console.log(window.scrollY, document.documentElement.scrollTop);
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

    ngOnInit(): void {
        console.log('init');
    }

    public scroll() {
        window.scroll(0, 0);
    }
}
