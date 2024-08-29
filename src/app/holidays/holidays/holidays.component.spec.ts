import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HolidaysComponent } from './holidays.component';
import { HolidaysService } from 'src/app/services/holidays.service';
import { EMPTY, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Holiday } from 'src/app/models/holiday';

describe('HolidaysComponent', () => {
  let component: HolidaysComponent;
  let fixture: ComponentFixture<HolidaysComponent>;
  let mockHodidayService: jasmine.SpyObj<HolidaysService>;

  beforeEach(() => {
    mockHodidayService = jasmine.createSpyObj(HolidaysService, ['getAvailableCountries','getHolidays']);
    mockHodidayService.getAvailableCountries.and.returnValue(EMPTY);
    
    TestBed.configureTestingModule({
      declarations: [HolidaysComponent],
      providers: [ {provide: HolidaysService, useValue: mockHodidayService}],
      imports: [FormsModule, MatTableModule]
    });

    fixture = TestBed.createComponent(HolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
      expect(component).toBeTruthy();
      expect(mockHodidayService.getAvailableCountries).toHaveBeenCalled();
  });

  it('getHolidays should set holidays', fakeAsync(() => {
    const expectedYear = new Date().getFullYear();
    const country = "FR";
    const response: Holiday[] = [
      {
          date: '2024-12-25',
          localName: 'Noël',
          countryCode: country,
          fixed: false,
          name: 'Christmas Day',
          types: ['Public']
      }
    ];

    mockHodidayService.getHolidays.and.returnValue(of(response));
    component.country = country;
    component.getHolidays();

    expect(mockHodidayService.getHolidays).toHaveBeenCalledWith(expectedYear, country);
    expect(component.holidays.length).toBe(1);
    expect(component.holidays[0]).toBe(response[0])
  }));
});