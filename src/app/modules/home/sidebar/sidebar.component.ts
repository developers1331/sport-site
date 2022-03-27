import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';
import {
  Isidebar,
  dataSidebar,
} from 'src/app/modules/home/sidebar/sidebar.params';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() dataSidebar2: Isidebar[] = dataSidebar;

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    console.log('init');
  }

  toggle(id: number) {
    this.dataSidebar2[id].open = !this.dataSidebar2[id].open;

    this.dataSidebar2.forEach((element) => {
      if (element.id === id) {
        element.open = true;
      } else {
        element.open = false;
      }
    });
    this.homeService.changeId(id);
  }
}
