import { Route } from '@angular/router';

export const PROFILE_ROUTE: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'singup',
    loadComponent: () =>
      import('./singup/singup.component').then((c) => c.SingupComponent),
  },
];
