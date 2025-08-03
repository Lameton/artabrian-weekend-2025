import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/split-landing/split-landing').then(
        (m) => m.SplitLanding
      ),
  },
  {
    path: 'mtg',
    loadComponent: () =>
      import('./features/mtg/pages/mtg-main/mtg-main').then((m) => m.MtgMain),
  },
  {
    path: 'swu',
    loadComponent: () =>
      import('./features/swu/pages/swu-main/swu-main').then((m) => m.SwuMain),
  },
  {
    path: 'tournament/:id',
    loadComponent: () =>
      import(
        './features/shared/pages/tournament-detail/tournament-detail'
      ).then((m) => m.TournamentDetail),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
