import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentLocation } from '../models/tournament-location.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentLocationService {
  private jsonUrl = 'assets/data/tournament-location.json';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<TournamentLocation[]> {
    return this.http.get<TournamentLocation[]>(this.jsonUrl);
  }
}