import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from './calendar/calendar.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CalendarService } from './services/calendar.service';
import { CommonModule } from '@angular/common';

const firebaseConfig = {
  apiKey: "AIzaSyBr0BQgfSLcYtJS8bIg-eY5cv1amVBgRhU",
  authDomain: "f1-2022-7ca5f.firebaseapp.com",
  databaseURL: "https://f1-2022-7ca5f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "f1-2022-7ca5f",
  storageBucket: "f1-2022-7ca5f.appspot.com",
  messagingSenderId: "670353930622",
  appId: "1:670353930622:web:bd6becb69a0557fd099b2f",
  measurementId: "G-P179BS202W"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  
    CalendarModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
