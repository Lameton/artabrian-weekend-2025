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

  // Computed para excepción sábado MTG 4 eventos
  isSabadoMtg4Eventos = computed(
    () =>
      this.selectedDay() === 'sábado' &&
      this.tcgId === 'mtg' &&
      this.sabadoEvents().length === 4
  );

  // Computed para excepción domingo MTG (tamaño aumentado)
  isDomingoMtgLarge = computed(
    () => this.selectedDay() === 'domingo' && this.tcgId === 'mtg'
  );

  sabadoGridCols = computed(() => {
    if (this.isSabadoMtg4Eventos()) {
      return 'grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6';
    }
    return this.tcgId === 'swu'
      ? 'grid-cols-1 md:grid-cols-2 gap-12'
      : 'grid-cols-1 md:grid-cols-4 gap-12';
  });

  domingoGridCols = computed(() => {
    if (this.isDomingoMtgLarge()) {
      return 'grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6';
    }
    return this.tcgId === 'swu'
      ? 'grid-cols-1 md:grid-cols-2 gap-12'
      : 'grid-cols-1 md:grid-cols-3 gap-12';
  });
}
