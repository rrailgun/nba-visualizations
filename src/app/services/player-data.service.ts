import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Player from '../models/Player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  baseURL = '/api'

  constructor(private http: HttpClient) {}

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.baseURL}/players`);
  }

  public getShotData(playerId, season) {
    return this.http.get(`${this.baseURL}/shotchartdetail?PlayerID=${playerId}&Season=${season}`);
  }

  public getVideoEvent(gameID, GameEventID) {
    return this.http.get(`${this.baseURL}/videoevents?GameEventID=${GameEventID}&GameID=${gameID}`)
  }

}
