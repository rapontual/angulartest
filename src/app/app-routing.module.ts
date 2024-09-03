import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { FactsComponent } from './components/facts/facts.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { TriviaComponent } from './components/trivia/trivia.component';

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
