import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventSchedule } from '../models/event-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class EventScheduleService {
  private jsonUrl = 'assets/data/event-schedule.json';

  constructor(private http: HttpClient) {}

  getSchedules(): Observable<EventSchedule[]> {
    return this.http.get<EventSchedule[]>(this.jsonUrl);
  }
}