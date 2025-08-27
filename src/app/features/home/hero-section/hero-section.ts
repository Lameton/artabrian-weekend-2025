import { Component, computed, inject, signal } from '@angular/core';
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

  // Señal con todas las descripciones
  descriptions = toSignal(this.descriptionService.getDescriptions(), {
    initialValue: [],
  });

  // Descripción activa (primer elemento o valor por defecto)
  activeDescription = computed(() => {
    const desc = this.descriptions()[0];
    return (
      desc ?? {
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

  // Texto con saltos de línea transformados en <br>
  descriptionWithBreaks = computed(() =>
    this.activeDescription().description
      ? this.activeDescription().description.replace(/\n/g, '<br>')
      : ''
  );

  // Lista combinada de sponsors (principales + secundarios)
  sponsorsList = computed(() => [
    ...this.activeDescription().principalSponsors,
    ...this.activeDescription().secondarySponsors,
  ]);

  // Navegación al formulario de inscripción
  onInscribeteClick() {
    this.router.navigate(['/inscripcion']);
  }

  // Estado para modal y nivel de zoom
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
