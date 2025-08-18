import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TournamentContact } from '../models/tournament-contact.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentContactService {
  private jsonUrl = 'assets/data/tournament-contact.json';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<TournamentContact[]> {
    return this.http.get<TournamentContact[]>(this.jsonUrl);
  }
}