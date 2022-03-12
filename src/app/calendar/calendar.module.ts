import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { RaceCalendarComponent } from "./components/race-calendar.component";
import { CalendarContainerComponent } from "./containers/calendar.container";

@NgModule({
    declarations: [
        // Containers
        CalendarContainerComponent,

        // Components
        RaceCalendarComponent,
    ],
    imports: [MaterialModule],
    bootstrap: [CalendarContainerComponent]
})
export class CalendarModule {

}