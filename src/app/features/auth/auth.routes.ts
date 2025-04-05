import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Flowfleet • Auth',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage)
  },
  {
    path: 'login',
    title: 'Flowfleet • Auth',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
]
