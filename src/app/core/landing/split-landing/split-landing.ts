import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TournamentSplitService } from '../../../services/tournament-split.service';
import { CookieConsentComponent } from '../../cookies-consent/cookies-consent';

@Component({
  selector: 'split-landing',
  standalone: true,
  templateUrl: './split-landing.html',
  imports: [CookieConsentComponent],
})
export class SplitLanding {
  private splitService = inject(TournamentSplitService);
  private router = inject(Router);

  hoveredPanelIndex: number | null = null;

  splits = toSignal(this.splitService.getSplits(), { initialValue: [] });

  tournamentName = computed(() => this.splits()[0]?.name ?? null);

  onHover(index: number) {
    this.hoveredPanelIndex = index;
  }

  onLeave() {
    this.hoveredPanelIndex = null;
  }

  goToTournament(split: { id: string; name: string }) {
    this.router.navigate(['/home'], { queryParams: { tcgId: split.id } });
  }
}
