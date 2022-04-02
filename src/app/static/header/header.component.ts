import {Component, HostListener, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ModalComponent} from 'src/app/static/modal/modal.component';
import {dataBtns, Ibtns} from 'src/app/static/header/header.params';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isActive: boolean = false;
    public btns: Ibtns[] = dataBtns;
    public imgPath: string = 'assets/images/bg-main.jpg';
    private widthScreen: number = 0;
    private modalHref!: BsModalRef;

    constructor(private modalService: BsModalService) {}

    ngOnInit(): void {
        console.log('init');
        this.function();
    }

    public openModal() {
        this.modalHref = this.modalService.show(ModalComponent);
    }

    public toggle() {
        this.isActive = !this.isActive;
        if (this.isActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }

    public function() {
        // Add event listener
        const elem: any = document.querySelector('#parallax');
        elem.addEventListener('mousemove', parallax);
        // Magic happens here
        function parallax(e: any) {
            let _w = elem.offsetWidth / 2;
            let _h = elem.offsetHeight / 2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 + (_mouseX - _w) * 0.06}% ${50 + (_mouseY - _h) * 0.06
                }%`;
            let _depth2 = `${50 + (_mouseX - _w) * 0.06}% ${50 + (_mouseY - _h) * 0.06
                }%`;
            let _depth3 = `${50 + (_mouseX - _w) * 0.03}% ${20 + (_mouseY - _h) * 0.02
                }%`;
            let x = `${_depth3}, ${_depth2}, ${_depth1}`;

            elem.style.backgroundPosition = x;
            console.log(elem.style.backgroundPosition);
        }
    }

    @HostListener('window:resize', ['$event']) onResize(event: any) {
        this.widthScreen = event.target.innerWidth;
        if (this.widthScreen >= 768) {
            this.isActive = false;
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
    }
}
