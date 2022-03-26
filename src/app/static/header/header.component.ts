import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { dataBtns, Ibtns } from 'src/app/static/header/header.params';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;
  public btns: Ibtns[] = dataBtns;
  private modalHref!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    console.log('init');
  }

  public openModal() {
    this.modalHref = this.modalService.show(ModalComponent);
  }

  public toggle() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
