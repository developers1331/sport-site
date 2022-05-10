import { Component, Input } from '@angular/core';
import {
    Itrainers,
    dataTrainers,
} from 'src/app/modules/home/trainer/trainer-params';

@Component({
    selector: 'app-trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent {
    @Input() dataTrainers2: Itrainers[] = dataTrainers;
    @Input() img: string = '';
    @Input() name: string = '';
    @Input() direction: string = '';

    constructor() {}
}
