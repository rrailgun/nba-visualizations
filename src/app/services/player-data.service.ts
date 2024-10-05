import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  baseURL = '/api'

  constructor(private http: HttpClient) {}

  public getShotData(playerId, season) {
    return this.http.get(`${this.baseURL}/shotchartdetail?PlayerID=${playerId}&Season=${season}`);
  }

  public getVideoEvent(gameID, GameEventID) {
    return this.http.get(`${this.baseURL}/videoevents?GameEventID=${GameEventID}&GameID=${gameID}`)
  }

}
