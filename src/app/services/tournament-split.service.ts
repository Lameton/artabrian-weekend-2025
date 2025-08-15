import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentSplit } from '../models/tournament-split.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentSplitService {
  private jsonUrl = 'assets/data/tournament-split.json';

  constructor(private http: HttpClient) {}

  getSplits(): Observable<TournamentSplit[]> {
    return this.http.get<TournamentSplit[]>(this.jsonUrl);
  }
}