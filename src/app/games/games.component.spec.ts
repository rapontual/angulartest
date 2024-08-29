import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesComponent } from './games.component';
import { GamesService } from '../services/games.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Game } from '../models/game';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let mockGamesService: jasmine.SpyObj<GamesService>;
  let gamesService: GamesService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // Using original service for the methods that have hard-coded data
    httpClientSpy = jasmine.createSpyObj(HttpClient, ['get']);
    gamesService = new GamesService(httpClientSpy);

    mockGamesService = jasmine.createSpyObj(GamesService, ['getCategories','getPlatforms','getSortBy','searchGames'])
    mockGamesService.getCategories.and.returnValue(gamesService.getCategories());
    mockGamesService.getPlatforms.and.returnValue(gamesService.getPlatforms());
    mockGamesService.getSortBy.and.returnValue(gamesService.getSortBy());

    TestBed.configureTestingModule({
      declarations: [GamesComponent],
      providers: [{provide: GamesService, useValue: mockGamesService}],
      imports: [FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule]
    });
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockGamesService.getCategories).toHaveBeenCalled();
    expect(mockGamesService.getPlatforms).toHaveBeenCalled();
    expect(mockGamesService.getSortBy).toHaveBeenCalled();
  });

  it('searchGames should call the service and set data', () => {
    const response: Game = {
        id: 44,
        title: 'title',
        thumbnail: 'thumb',
        short_description: 'desr',
        game_url: 'url',
        genre: 'genre',
        platform: 'pc',
        publisher: 'some',
        developer: 'dev',
        release_date: '2000-01-01',
        freetogame_profile_url: 'profile'
    };

    mockGamesService.searchGames.and.returnValue(of([response]));
    component.category = "Cat";
    component.sortyBy = "Sort"

    component.searchGames();

    expect(mockGamesService.searchGames).toHaveBeenCalledWith(component.category, component.platform, component.sortyBy);
    expect(component.games.length).toBe(1);
    expect(component.games[0]).toBe(response);
  });
});
