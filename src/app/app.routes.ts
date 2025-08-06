import { Routes } from '@angular/router';
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
    path: '**',
    redirectTo: '', // Redirige a la Home si la URL no coincide con ninguna ruta
  },
];
