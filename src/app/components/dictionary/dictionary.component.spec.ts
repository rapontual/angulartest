import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryComponent } from './dictionary.component';
import { DictionaryService } from '../../services/dictionary.service';
import { FormsModule } from '@angular/forms';
import { DictionaryModel } from '../../models/dictionary';
import { of } from 'rxjs';

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;
  let dictionaryService: jasmine.SpyObj<DictionaryService>;

  beforeEach(() => {
    dictionaryService = jasmine.createSpyObj(DictionaryService, ['searchWord']);
    TestBed.configureTestingModule({
      declarations: [DictionaryComponent],
      providers: [{provide: DictionaryService, useValue: dictionaryService}],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.word).toBe('');
    expect(component.meanings.length).toBe(0);
  });

  it('searchWord should set meanings with the results', () => {
    // arrange
    const word = 'blue';
    const result:  DictionaryModel[] = [
        {
            word: word,
            phonetic: 'phonetic',
            meanings: [{partOfSpeech: 'adjective', definitions: [{definition: 'colour', example: ''}]}],
            phonetics: [{text: 'some text', audio: 'http://audio-url/audio.mp3'}]
        }
    ]
    component.word = word;
    dictionaryService.searchWord.and.returnValue(of(result));

    // act
    component.searchWord();

    // assert
    expect(component.meanings).toBe(result[0].meanings);
    expect(dictionaryService.searchWord).toHaveBeenCalledOnceWith(word);
  });
});
