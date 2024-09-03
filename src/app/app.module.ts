import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FactsComponent } from './components/facts/facts.component';
import { FormsModule } from '@angular/forms';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { GamesComponent } from "./components/games/games.component";

import { AppRoutingModule } from './app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormatStringDatePipe } from './pipes/format-string-date.pipe';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { TriviaComponent } from './components/trivia/trivia.component';


@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    GamesComponent,
    DictionaryComponent,
    FormatStringDatePipe,
    HolidaysComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, MatTableModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
