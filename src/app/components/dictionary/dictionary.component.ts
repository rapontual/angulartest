import { Component } from '@angular/core';
import { DictionaryModel, Meaning } from '../../models/dictionary';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {
   constructor(private dictionaryService: DictionaryService) {}

   word = '';
   meanings: Meaning[] = [];
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
        this.meanings = data[0].meanings;
      },
      error => {
        console.log("Error!" + error);
        let elem: HTMLDialogElement = document.getElementById("dialog") as HTMLDialogElement;
        elem.showModal();
        //this.dialog.open(this.mydialog);
      })
   }
}
