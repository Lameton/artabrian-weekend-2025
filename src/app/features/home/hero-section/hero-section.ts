import { Component, computed, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TournamentDescriptionService } from '../../../services/tournament-description.service';
import { SponsorsComponent } from '../../../core/sponsors/sponsors';

@Component({
  selector: 'hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  imports: [SponsorsComponent],
})
export class HeroSection {
  private descriptionService = inject(TournamentDescriptionService);
  private router = inject(Router);

  // Signal con todas las descripciones
  descriptions = toSignal(this.descriptionService.getDescriptions(), {
    initialValue: [],
  });

  // Recibe el id seleccionado por Input
  @Input() tcgId: string | null = null;

  // Descripción activa filtrada según tcgId
  activeDescription = computed(() => {
    const id = this.tcgId;
    const all = this.descriptions();
    if (!id) {
      return (
        all[0] ?? {
          id: '',
          name: '',
          dates: '',
          location: '',
          description: '',
          posterPath: '',
          backgroundPath: '',
          principalSponsors: [],
          secondarySponsors: [],
        }
      );
    }
    return (
      all.find((desc) => desc.id === id) ??
      all[0] ?? {
        id: '',
        name: '',
        dates: '',
        location: '',
        description: '',
        posterPath: '',
        backgroundPath: '',
        principalSponsors: [],
        secondarySponsors: [],
      }
    );
  });

  // Texto con saltos de línea convertidos a <br>
  descriptionWithBreaks = computed(() =>
    this.activeDescription().description
      ? this.activeDescription().description.replace(/\n/g, '<br>')
      : ''
  );

  // Lista combinada de sponsors
  sponsorsList = computed(() => [
    ...this.activeDescription().principalSponsors,
    ...this.activeDescription().secondarySponsors,
  ]);

  // Navegación al formulario de inscripción
  onInscribeteClick() {
    window.open('https://forms.gle/RgEFrzzyKXLRsDLm9', '_blank');
  }

  // Signals para modal y zoom
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
    if (event.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  }
}
