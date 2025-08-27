import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TournamentDescription } from '../models/tournament-description.model';

@Injectable({
  providedIn: 'root',
})
export class TournamentDescriptionService {
  private jsonUrl = 'assets/data/tournament-description.json';

  constructor(private http: HttpClient) {}

  getDescriptions(): Observable<TournamentDescription[]> {
    return this.http.get<TournamentDescription[]>(this.jsonUrl);
  }

  getDescriptionById(
    id: string
  ): Observable<TournamentDescription | undefined> {
    return this.http.get<TournamentDescription[]>(this.jsonUrl).pipe(
      map((descriptions) => descriptions.find((desc) => desc.id === id)),
      catchError((error) => {
        console.error('Error fetching tournament description:', error);
        return of(undefined);
      })
    );
  }
}
