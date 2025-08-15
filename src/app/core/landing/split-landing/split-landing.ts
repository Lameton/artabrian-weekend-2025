import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TournamentSplitService } from '../../../services/tournament-split.service';
import { TournamentSplit } from '../../../models/tournament-split.model';

@Component({
  selector: 'split-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './split-landing.html',
  styleUrls: ['./split-landing.scss'],
})
export class SplitLanding {
  private splitService = inject(TournamentSplitService);

  hoveredPanel: 'mtg' | 'swu' | null = null;

  // Convertimos el observable a signal reactiva
  splits = toSignal(this.splitService.getSplits(), { initialValue: [] });

  // Extra: puedes derivar el nombre del torneo directamente de los splits
  tournamentName = computed(() => this.splits()[0]?.name ?? null);

  onHover(panel: 'mtg' | 'swu') {
    this.hoveredPanel = panel;
  }

  onLeave() {
    this.hoveredPanel = null;
  }
}
