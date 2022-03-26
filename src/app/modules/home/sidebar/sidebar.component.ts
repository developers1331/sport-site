import { Component, OnInit, Input } from '@angular/core';
import {
  Isidebar,
  dataSidebar,
} from 'src/app/modules/home/sidebar-btn/sidebar-btn-params';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() dataSidebar2: Isidebar[] = dataSidebar;

  constructor() {}

  ngOnInit(): void {
    console.log('init');
  }

  toggle(id: number) {
    this.dataSidebar2[id].open = !this.dataSidebar2[id].open;
    console.log(this.dataSidebar2[id]);
    this.dataSidebar2.forEach((element) => {
      if (element.id === id) {
        element.open = true;
      } else {
        element.open = false;
      }
    });
  }
}
