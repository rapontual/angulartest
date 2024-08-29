import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Holiday } from 'src/app/models/holiday';
import { HolidaysService } from 'src/app/services/holidays.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {

  constructor(private holidayService: HolidaysService) {}

  countries: Country[] = []
  country: string = ''
  holidays: Holiday[] = []

  displayedColumns: string[] = ['date', 'name', 'localName', 'types'];

  ngOnInit(): void {
    this.holidayService.getAvailableCountries()
      .subscribe({
        next: (data) => {
          this.countries = data;
        }
      })
  }

  getHolidays() {
    const year = new Date().getFullYear();
    this.holidayService.getHolidays(year, this.country)
      .subscribe({
        next: (data) => {
          this.holidays = data;
        }
      })
  }
}
