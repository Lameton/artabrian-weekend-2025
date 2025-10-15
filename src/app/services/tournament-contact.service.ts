import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contacto {
  title: string;
  description: string;
  addresses: { type: string; street: string; city: string; zip: string }[];
  phones: { type: string; number: string }[];
  emails: { type: string; address: string }[];
  social: { instagram: string; x: string };
  form: {
    fields: { name: string; type: string; required: boolean }[];
    cta: string;
    privacy: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TournamentContactService {
  private jsonUrl = 'assets/data/tournament-contact.json';

  constructor(private http: HttpClient) {}

  getContact(): Observable<Contacto> {
    return this.http.get<Contacto>(this.jsonUrl);
  }
}
