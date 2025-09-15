import { Routes } from '@angular/router';
import { TournamentCardComponent } from './features/home/tournamentsSection/tournamentCard/tournamentCard';
// Importa el tipo Routes, necesario para definir el array de rutas principal de Angular.

export const routes: Routes = [
  // ========================
  // Ruta Home (Raíz "/")
  // ========================
  {
    path: '', // URL raíz ("/")
    title: 'Inicio',
    loadComponent: () =>
      import('./core/landing/split-landing/split-landing').then(
        (m) => m.SplitLanding
      ),
    // Lazy-load del componente App (componente raíz).
    // Si quieres una landing principal aquí, debe ser el componente que sirva de página de inicio.
    // Es habitual poner "App" aquí cuando no tienes una landing específica.
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'herosection',
    title: 'hero-section',
    loadComponent: () =>
      import('./features/home/hero-section/hero-section').then(
        (m) => m.HeroSection
      ),
  },

  {
    path: 'tournaments',
    title: 'tournaments',
    loadComponent: () =>
      import('./features/home/tournamentsSection/tournamentsSection').then(
        (m) => m.TournamentSectionComponent
      ),
  },

  {
    path: 'location',
    title: 'location',
    loadComponent: () =>
      import('./features/home/locationSection/locationSection').then(
        (m) => m.LocationSectionComponent
      ),
  },

  {
    path: '**',
    redirectTo: '', // Redirige a la Home si la URL no coincide con ninguna ruta
  },
];
