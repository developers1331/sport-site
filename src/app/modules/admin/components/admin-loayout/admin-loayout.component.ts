import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/admin/services/auth.service';

@Component({
    selector: 'app-admin-loayout',
    templateUrl: './admin-loayout.component.html',
    styleUrls: ['./admin-loayout.component.scss'],
})
export class AdminLoayoutComponent implements OnInit {
    constructor(private router: Router, private auth: AuthService) {}

    ngOnInit(): void {
        console.log('init');
    }

    public logout(event: Event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/admin', 'login']);
    }
}
