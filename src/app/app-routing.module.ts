import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { FactsComponent } from './facts/facts.component';
import { HolidaysComponent } from './holidays/holidays/holidays.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'games', component: GamesComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'facts', component: FactsComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'trivia', component: TriviaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
