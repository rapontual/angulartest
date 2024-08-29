import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private gamesService: GamesService) {}

  category: string = '';
  platform: string = 'all';
  sortyBy: string = '';

  categories: string[] = [];
  platforms: string[] = [];
  sortByCriteria: string[] = []
  games: Game[] = []

  ngOnInit(): void {
    this.gamesService.getCategories()
      .subscribe( {
        next: (data) => {
          this.categories = data;
        }
      });

    this.gamesService.getPlatforms()
      .subscribe( {
        next: (data) => {
          this.platforms = data;
          this.platform = data[0];
        }
      });

    this.gamesService.getSortBy()
      .subscribe( {
        next: (data) => {
          this.sortByCriteria = data;
          this.sortyBy = data[0];
        }
      });
  }

  searchGames() {
    this.gamesService
      .searchGames(this.category, this.platform, this.sortyBy)
      .subscribe({
        next: (data)  => {
          this.games = data;
        }
      })
  }
}
