import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getCategories() : Observable<string[]> {
    const categories = ['mmorpg','shooter','strategy','moba','racing','sports','social','sandbox','open-world','survival','pvp','pve','pixel','voxel','zombie','turn-based','first-person','third-Person','top-down','tank','space','sailing','side-scroller','superhero','permadeath','card','battle-royale','mmo','mmofps','mmotps','3d','2d','anime','fantasy','sci-fi','fighting','action-rpg','action','military','martial-arts','flight','low-spec','tower-defense','horror','mmorts'];
    return of(categories);
  }

  getPlatforms() : Observable<string[]> {
    const plastforms = ['all','pc','browser'];
    return of(plastforms);
  }

  getSortBy() : Observable<string[]> {
    const order = ['alphabetical','popularity','release-date', 'relevance'];
    return of(order);
  }

  searchGames(category: string, platform: string, sortBy: string) : Observable<Game[]> {

    const headers = new HttpHeaders({
      'x-rapidapi-host':'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key':'fa63beed98msh3d50f36cdc891dfp1dfae0jsnc7a43369baa7'});

    const categoryCriteria = category !== "" ? `&category=${category}` : "";
    const url=`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&sort-by=${sortBy}${categoryCriteria}`;
    //const url=`https://www.freetogame.com/api/games?platform=${platform}&sort-by=${sortBy}${categoryCriteria}`;
    
    return this.httpClient.get<Game[]>(url, {headers: headers});
  }
}
