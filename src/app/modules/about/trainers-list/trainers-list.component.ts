import { Component } from '@angular/core';
import { ITraniner, trainersListConfig } from './trainers-list.params';
@Component({
    selector: 'app-trainers-list',
    templateUrl: './trainers-list.component.html',
    styleUrls: ['./trainers-list.component.scss'],
})
export class TrainersListComponent {
    public trainerList: ITraniner[] = trainersListConfig;

    constructor() {}
}
