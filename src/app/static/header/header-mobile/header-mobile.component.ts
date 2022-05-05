import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/static/modal/modal.component';
import { Ibtns, dataBtns } from 'src/app/static/header/header.params';

@Component({
    selector: 'app-header-mobile',
    templateUrl: './header-mobile.component.html',
    styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
    @Input() isActive: boolean = false;

    public btns: Ibtns[] = dataBtns;

    constructor(private modalService: BsModalService) {}

    public openModal() {
        this.modalService.show(ModalComponent);
    }
}
