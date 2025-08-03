import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { EventDataService } from '../../../../core/services/event-data.service';
import { Tournament } from '../../../../shared/models';

@Component({
  selector: 'tournament-detail',
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe],
  templateUrl: './tournament-detail.html',
  styleUrls: ['./tournament-detail.scss'],
})
export class TournamentDetail {
  private route = inject(ActivatedRoute);
  private service = inject(EventDataService);

  tournament?: Tournament;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tournament = this.service.getTournamentById(id);
    }
  }

  onRegister(): void {
    if (this.tournament?.registrationUrl) {
      window.open(this.tournament.registrationUrl, '_blank');
    } else {
      alert(
        `Inscripción para ${this.tournament?.name} próximamente disponible`
      );
    }
  }
}
