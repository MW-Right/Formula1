import { Component, Input } from "@angular/core";
import { Race } from "src/app/models";

@Component({
    selector: 'race-calendar',
    templateUrl: './race-calendar.component.html',
    styleUrls: ['./race-calendar.component.scss']
})
export class RaceCalendarComponent {
    @Input() raceData: Race[] = [];

    displayedColumns = [
        'name',
        'country',
        'date'
    ];
}