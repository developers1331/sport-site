import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/static/modal/modal.component';
import { dataBtn, btns } from 'src/app/static/footer/footer.params';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    private modalHref!: BsModalRef;

    constructor(private modalService: BsModalService) {}
    public dataBtns: btns = dataBtn;

    public openModal() {
        this.modalHref = this.modalService.show(ModalComponent);
    }
}
