import { Routes } from '@angular/router';

export const routes: Routes = [
  //Auth routes
  {
    path: '',
    data: { layout: 'empty' },
    loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.routes)
      },
    ],
  },
]
