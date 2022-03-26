import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-btn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss'],
})
export class SidebarBtnComponent implements OnInit {
  @Input() direction: string = '';
  @Input() id: string = '';
  @Input() open: boolean = false;
  @Input() isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }
}
