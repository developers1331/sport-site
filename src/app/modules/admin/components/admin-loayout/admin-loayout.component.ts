import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-loayout',
    templateUrl: './admin-loayout.component.html',
    styleUrls: ['./admin-loayout.component.scss'],
})
export class AdminLoayoutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('init');
    }
}
