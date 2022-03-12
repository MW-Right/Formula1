import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Race } from "src/app/models";
import { CalendarService } from "src/app/services/calendar.service";

@Component({
    selector: 'f122-calendar',
    templateUrl: './calendar.container.html',
    styleUrls: ['./calendar.container.scss']
})
export class CalendarContainerComponent {
    raceData: Race[] = [];

    constructor(private calendarService: CalendarService) {
        this.calendarService.races.snapshotChanges().pipe(
            map(changes => 
                changes.map(c => {
                    const value = c.payload.val();
                    return new Race(
                        c.payload.key ?? '',
                        value?.round,
                        value?.name,
                        value?.country,
                        value?.city,
                        value?.flag,
                        value?.date
                    );
                })
            )
        ).subscribe(data => this.raceData = data);
    }
}