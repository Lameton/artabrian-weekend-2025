import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentDescription } from '../models/tournament-description.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentDescriptionService {
  private jsonUrl = 'assets/data/tournament-description.json';

  constructor(private http: HttpClient) {}

  getDescriptions(): Observable<TournamentDescription[]> {
    return this.http.get<TournamentDescription[]>(this.jsonUrl);
  }
}