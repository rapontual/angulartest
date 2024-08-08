import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
   constructor(private http: HttpClient) {}

   word = '';
   meanings: Meaning[] = [];
   audioUrl = '';
   result: DictionaryModel = {
    word: '',
    phonetic: '',
    meanings: [],
    phonetics: []
   };

   searchWord() {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + this.word;

    this.http
      .get<DictionaryModel[]>(url)
      .subscribe(data => {
        this.result = data[0];
        this.audioUrl = data[0]?.phonetics[0]?.audio;
        this.meanings = data[0].meanings;
      })
   }
}

export interface DictionaryModel {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
}

export interface Phonetic {
  text: string
  audio: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
}

export interface Definition {
  definition: string
  example?: string
}
