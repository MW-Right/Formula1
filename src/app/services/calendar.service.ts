import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Race } from "../models";

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    races: AngularFireList<Race>;
    constructor(private store: AngularFireDatabase) {
        this.races = this.store.list("races");
        console.log(this.races);
    }
}