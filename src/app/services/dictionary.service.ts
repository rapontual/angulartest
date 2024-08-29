import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DictionaryModel } from '../models/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) { }

  searchWord(word: string) {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    return this.httpClient.get<DictionaryModel[]>(url);
   }
}
