import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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
  
    getEventById(id: string): Observable<TournamentEvent | undefined> {
      return this.http.get<TournamentEvent[]>(this.jsonUrl).pipe(
        map(events => events.find(desc => desc.id === id)),
        catchError(error => {
          console.error('Error fetching tournament event:', error);
          return of(undefined);
        })
      );
    }
}