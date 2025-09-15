import { Component, computed, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../core/header/header';
import { HeroSection } from './hero-section/hero-section';
import { ActivatedRoute } from '@angular/router';
import { TournamentSectionComponent } from './tournamentsSection/tournamentsSection';
import { CommonModule } from '@angular/common';
import { LocationSectionComponent } from './locationSection/locationSection';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSection,
    TournamentSectionComponent,
    LocationSectionComponent,
  ],
  templateUrl: './home.html',
})
export class Home {
  private route = inject(ActivatedRoute);

  tcgId = signal<string | null>(null);

  selectedTcgName = computed(() => {
    const id = this.tcgId();
    if (id === 'mtg') return 'Magic: The Gathering';
    if (id === 'swu') return 'Star Wars Unlimited';
    return 'Selecciona un TCG';
  });

  pageSections = [
    { id: 'home', title: 'Inicio' },
    { id: 'tournaments', title: 'Torneos' },
    { id: 'location', title: 'Localización' },
    { id: 'contact', title: 'Contacto' },
  ];

  activeSection = signal<string>('home');
  locationJson = {
    backgroundPath: '/assets/images/location/location.jpg',
    adress: 'Rúa de San Pedro 123, 15703 Santiago de Compostela, Galicia',
    geopath: 'https://maps.google.com/?q=42.8806,-8.5457',
  };

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.tcgId.set(params.get('tcgId'));
    });
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeSection.set(id); // Opcional marca también aquí el activo
  }
}
