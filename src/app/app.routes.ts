import { Routes } from '@angular/router';
import { App } from './app';
import { MtgMain } from './features/mtg/pages/mtg-main/mtg-main';
import { SwuMain } from './features/swu/pages/swu-main/swu-main';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'mtg', component: MtgMain },
  { path: 'swu', component: SwuMain },
  { path: '**', redirectTo: '' },
];
