import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title?: string;
  @Input() closeBtnName?: string;
  @Input() list: any[] = [];

  public form: FormGroup = new FormGroup({});

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      text: new FormControl('', Validators.required),
    });
  }

  public submit() {
    if (this.form.valid) {
      this.bsModalRef.hide();
    }
    console.log(this.form);
    //
  }
}
