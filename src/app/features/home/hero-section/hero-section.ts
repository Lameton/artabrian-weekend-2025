import { Component, computed, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TournamentDescriptionService } from '../../../services/tournament-description.service';
import { SponsorsComponent } from '../../../core/sponsors/sponsors';
import { Sponsor } from '../../../models/sponsor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  imports: [SponsorsComponent, CommonModule],
})
export class HeroSection {
  private descriptionService = inject(TournamentDescriptionService);
  private router = inject(Router);

  descriptions = toSignal(this.descriptionService.getDescriptions(), {
    initialValue: [],
  });
  @Input() tcgId: string | null = null;

  activeDescription = computed(() => {
    const id = this.tcgId;
    const all = this.descriptions();
    if (!id) return all[0];
    return all.find((desc) => desc.id === id) ?? all[0];
  });

  descriptionWithBreaks = computed(() =>
    this.activeDescription()?.description
      ? this.activeDescription().description.replace(/\n/g, '<br>')
      : ''
  );

  onInscribeteClick() {
    const links: Record<string, string> = {
      mtg: 'https://forms.gle/YEjJq8c4fXjBQXtS8', // Enlace real para MTG
      swu: 'https://forms.gle/EaR2hasGSy7CPCcJ9', // Enlace real para SWU
    };
    const selectedLink = this.tcgId ? links[this.tcgId] : links['mtg'];
    window.open(selectedLink, '_blank');
  }

  posterZoomVisible = signal(false);
  zoomLevel = signal(1);

  showPosterZoom() {
    this.posterZoomVisible.set(true);
    this.zoomLevel.set(1);
  }
  closePosterZoom() {
    this.posterZoomVisible.set(false);
  }
  zoomIn() {
    this.zoomLevel.update((z) => Math.min(z + 0.2, 3));
  }
  zoomOut() {
    this.zoomLevel.update((z) => Math.max(z - 0.2, 1));
  }
  onWheelZoom(event: WheelEvent) {
    event.preventDefault();
    if (event.deltaY < 0) this.zoomIn();
    else this.zoomOut();
  }
}
