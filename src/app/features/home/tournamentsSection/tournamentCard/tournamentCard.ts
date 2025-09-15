import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentEvent } from '../../../../models/tournament-event.model';

const EMPTY_TOURNAMENT: TournamentEvent = {
  id: '',
  name: '',
  day: '',
  hour: '',
  prize: 0,
  details: '',
  rewards: [],
  backgroundPath: '',
};

@Component({
  selector: 'tournament-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournamentCard.html',
})
export class TournamentCardComponent {
  private _tournament = signal<TournamentEvent | null>(null);

  @Input({ required: true })
  set tournament(value: TournamentEvent | null) {
    this._tournament.set(value);
  }

  data = computed(() => this._tournament() ?? EMPTY_TOURNAMENT);
}
