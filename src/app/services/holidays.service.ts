import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Holiday } from '../models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private httpClient: HttpClient) { }

  getAvailableCountries() : Observable<Country[]> {
    const url = 'https://date.nager.at/api/v3/AvailableCountries';
    return this.httpClient.get<Country[]>(url);
  }

  getHolidays(year: number, countryCode: string) : Observable<Holiday[]> {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
    return this.httpClient.get<Holiday[]>(url);
  }
}
