import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pluses',
    templateUrl: './pluses.component.html',
    styleUrls: ['./pluses.component.scss'],
})
export class PlusesComponent {
    @Input() img: string = '';
    @Input() title: string = '';
    @Input() description: string = '';

    constructor() {}
}
