import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentEvent } from '../models/tournament-event.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentEventService {
  private jsonUrl = 'assets/data/tournament-event.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<TournamentEvent[]> {
    return this.http.get<TournamentEvent[]>(this.jsonUrl);
  }
}