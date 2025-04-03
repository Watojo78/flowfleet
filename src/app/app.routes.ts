import { Routes } from '@angular/router';

export const routes: Routes = [
  //Auth routes
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    data: { layout: 'empty' },
    children: [
      {
        path: '',
        //loadChildren: () => import('./features/auth/auth.routes').then((m) => m.routes)
      },
    ],
  },

  //admin routes
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    data: { layout: 'admin' },
    children: [
      {
        path: '',
        //loadChildren: () => import('./features/admin/admin.routes').then((m) => m.routes)
      },
    ],
  },
];
