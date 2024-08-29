import { TestBed } from '@angular/core/testing';
import { DictionaryService } from './dictionary.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DictionaryService', () => {
  let service: DictionaryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DictionaryService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('searchWord should call endpoint and return observable', async () => {
    const word = 'test';
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    service.searchWord(word).subscribe(data => {
      expect(data).not.toBeNull();
      expect(data.length).toBe(1);
      expect(data[0].word).toBe(word);
    });

    var req = httpTestingController.expectOne((request) => {
      return request.method === 'GET' && request.url === url;
    });

    req.flush([{word: word}]);

    // const req = httpTestingController.expectOne(url);
    // expect(req.request.method).toBe("GET");
  })
});