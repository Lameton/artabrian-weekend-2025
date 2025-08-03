import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { EventDataService } from '../../../../core/services/event-data.service';
import { TournamentCard } from '../../../../shared/components/tournament-card/tournament-card';
import { Tournament } from '../../../../shared/models';

@Component({
  selector: 'mtg-main',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, TitleCasePipe, TournamentCard, RouterLink],
  templateUrl: './mtg-main.html',
  styleUrl: './mtg-main.scss',
})
export class MtgMain {
  private service = inject(EventDataService);
  games = this.service.getGameInfo('mtg');

  // Obtener torneos por día
  friday: Tournament[] = this.service.getTournamentsByDay('mtg', 'friday');
  saturday: Tournament[] = this.service.getTournamentsByDay('mtg', 'saturday');
  sunday: Tournament[] = this.service.getTournamentsByDay('mtg', 'sunday');

  onRegister(tournament: Tournament) {
    if (tournament.registrationUrl) {
      window.open(tournament.registrationUrl, '_blank');
    } else {
      alert(`Inscripción para ${tournament.name} próximamente disponible`);
    }
  }
}
