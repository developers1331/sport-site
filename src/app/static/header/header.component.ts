import { Component, HostListener, OnInit } from '@angular/core';
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
  private widthScreen: number = 0;
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
      document.body.style.touchAction = 'none';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
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
