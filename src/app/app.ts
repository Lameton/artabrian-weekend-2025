import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, JsonPipe } from '@angular/common';
import { EventDataService } from './core/services/event-data.service';
import { TournamentCard } from './shared/components/tournament-card/tournament-card';
import { Tournament } from './shared/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // ← Importar RouterOutlet para <router-outlet>
    NgFor,
    JsonPipe,
    TournamentCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'artabrian-weekend-2025';

  private eventService = inject(EventDataService);

  eventInfo = this.eventService.getEventInfo();
  allGames = this.eventService.getAllGames();

  mtgTournaments = this.eventService.getTournamentsByGame('mtg').slice(0, 2);
  swuTournaments = this.eventService.getTournamentsByGame('swu').slice(0, 2);

  onTournamentRegister(tournament: Tournament) {
    if (tournament.registrationUrl) {
      window.open(tournament.registrationUrl, '_blank');
    } else {
      alert(`Inscripción para ${tournament.name} próximamente disponible`);
    }
  }
}
