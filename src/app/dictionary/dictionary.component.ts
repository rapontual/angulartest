import { Component } from '@angular/core';
import { DictionaryModel, Meaning } from '../models/dictionary';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
   constructor(private dictionaryService: DictionaryService) {}

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
    this.dictionaryService.searchWord(this.word)
      .subscribe(data => {
        this.result = data[0];
        this.audioUrl = data[0]?.phonetics[0]?.audio;
        this.meanings = data[0].meanings;
      })
   }
}
