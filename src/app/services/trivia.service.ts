import { Injectable } from '@angular/core';
import { SelectOption } from '../models/selectOption';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TriviaResponse, TriviaQuestion } from '../models/trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private httpClient: HttpClient) { }

   categories: SelectOption[] = [
    { value: "any", text: "Any Category" },
    { value: "9", text: "General Knowledge" },
    { value: "10", text: "Entertainment: Books" },
    { value: "11", text: "Entertainment: Film" },
    { value: "12", text: "Entertainment: Music" },
    { value: "13", text: "Entertainment: Musicals &amp; Theatres" },
    { value: "14", text: "Entertainment: Television" },
    { value: "15", text: "Entertainment: Video Games" },
    { value: "16", text: "Entertainment: Board Games" },
    { value: "17", text: "Science &amp; Nature" },
    { value: "18", text: "Science: Computers" },
    { value: "19", text: "Science: Mathematics" },
    { value: "20", text: "Mythology" },
    { value: "21", text: "Sports" },
    { value: "22", text: "Geography" },
    { value: "23", text: "History" },
    { value: "24", text: "Politics" },
    { value: "25", text: "Art" },
    { value: "26", text: "Celebrities" },
    { value: "27", text: "Animals" },
    { value: "28", text: "Vehicles" },
    { value: "29", text: "Entertainment: Comics" },
    { value: "30", text: "Science: Gadgets" },
    { value: "31", text: "Entertainment: Japanese Anime &amp; Manga" },
    { value: "32", text: "Entertainment: Cartoon &amp; Animations" }];
  
  difficulties: SelectOption[] = [
    { value: "any", text: "Any Difficulty" },
    { value: "easy", text: "Easy" },
    { value: "medium", text: "Medium" },
    { value: "hard", text: "Hard" }
  ]

  getDifficulties(): Observable<SelectOption[]> {
    return of(this.difficulties);
  }

  getCategories(): Observable<SelectOption[]> {
    return of(this.categories);
  }

  getQuestions(category: string, difficulty: string): Observable<TriviaResponse> {
    const categoryCriteria = category == "any" ? "" : `&category=${category}`;
    const difficultyCriteria = difficulty == "any" ? "" : `&difficulty=${difficulty}`;
    const url = `https://opentdb.com/api.php?amount=10${categoryCriteria}${difficultyCriteria}`;

    return this.httpClient.get<TriviaResponse>(url);
  }
}
