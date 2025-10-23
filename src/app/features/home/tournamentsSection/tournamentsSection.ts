import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TournamentEventService } from '../../../services/tournament-event.service';
import { TournamentCardComponent } from './tournamentCard/tournamentCard';

@Component({
  selector: 'tournament-section',
  standalone: true,
  imports: [CommonModule, TournamentCardComponent],
  templateUrl: './tournamentSection.html',
})
export class TournamentSectionComponent {
  private eventService = inject(TournamentEventService);

  @Input() tcgId: string | null = null;

  private eventsSignal = toSignal(this.eventService.getEvents(), {
    initialValue: [],
  });

  mtgEvents = computed(() => {
    const id = this.tcgId ?? 'mtg';
    return this.eventsSignal().filter((e) => e.id === id);
  });

  viernesEvents = computed(() =>
    this.mtgEvents().filter((e) => e.day.toLowerCase() === 'viernes')
  );
  sabadoEvents = computed(() =>
    this.mtgEvents().filter((e) => e.day.toLowerCase() === 'sábado')
  );
  domingoEvents = computed(() =>
    this.mtgEvents().filter((e) => e.day.toLowerCase() === 'domingo')
  );

  selectedDay = signal<'viernes' | 'sábado' | 'domingo'>('viernes');

  // Computed para las columnas dinámicas de sábado
  sabadoGridCols = computed(() =>
    this.tcgId === 'swu'
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-4'
  );

  domingoGridCols = computed(() =>
    this.tcgId === 'swu'
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3'
  );
}
