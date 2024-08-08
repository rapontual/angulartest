import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FactsService {

  constructor(private httpClient: HttpClient) { }

  getFact(lang: string): Observable<any> {
    lang = lang ?? 'en';
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=' + lang;

    return this.httpClient.get<any>(url);
  }
}
