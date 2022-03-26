import { Component, HostListener, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { Ibtns, dataBtns } from 'src/app/static/header/header.params';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  @Input() isActive: boolean = false;

  public btns: Ibtns[] = dataBtns;
  private modalHref!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  public openModal() {
    this.modalHref = this.modalService.show(ModalComponent);
  }
}
