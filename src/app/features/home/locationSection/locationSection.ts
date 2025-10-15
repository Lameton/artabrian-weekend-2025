import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentLocation } from '../../../models/tournament-location.model';
import MapComponent from '../../../components/map/mapComponent';

@Component({
  selector: 'location-section',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './locationSection.html',
})
export class LocationSectionComponent {
  @Input() locationData: TournamentLocation | null = null;

  get backgroundPath(): string {
    return this.locationData?.backgroundPath ?? '';
  }

  get adress(): string {
    return this.locationData?.adress ?? '';
  }

  // Coordenadas para el mapa; puedes extraerlas dinámicamente si tienes esa info
  get latitude(): number {
    return 42.8806;
  }

  get longitude(): number {
    return -8.5457;
  }
}
