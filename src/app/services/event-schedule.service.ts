import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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
  
    getScheduleById(id: string): Observable<EventSchedule | undefined> {
      return this.http.get<EventSchedule[]>(this.jsonUrl).pipe(
        map(schedules => schedules.find(desc => desc.id === id)),
        catchError(error => {
          console.error('Error fetching tournament schedule:', error);
          return of(undefined);
        })
      );
    }
}