import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  public toggle() {
    this.isActive = !this.isActive;
  }
}
