import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./current-squad/current-squad.component').then(
        (module) => module.CurrentSquadComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
