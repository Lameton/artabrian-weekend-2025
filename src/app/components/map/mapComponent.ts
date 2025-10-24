import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as leaflet from 'leaflet';
import 'leaflet-defaulticon-compatibility';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './mapComponent.html',
  styleUrls: ['../../../styles.scss'], // Añade esta línea
})
export default class MapComponent implements AfterViewInit, OnDestroy {
  private map?: leaflet.Map;
  private location = { lat: 42.477284, lng: -8.791519 };

  @ViewChild('map', { static: false }) mapElement?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (!this.mapElement) return;

    // Initialize map without attribution control
    this.map = leaflet.map(this.mapElement.nativeElement, {
      center: [this.location.lat, this.location.lng],
      zoom: 16,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false,
    });

    // Add OpenStreetMap tiles without attribution
    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      })
      .addTo(this.map);

    // Add a marker
    leaflet
      .marker([this.location.lat, this.location.lng])
      .addTo(this.map)
      .bindPopup('<b>Pazo do Monte, Ferrol</b>')
      .openPopup();

    // Fuerza que el mapa se ajuste correctamente al contenedor
    setTimeout(() => {
      this.map?.invalidateSize();
    }, 100);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
