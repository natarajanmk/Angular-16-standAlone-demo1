import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const APP_ROUTE: Route[] = [
  { path: '', component: BlogComponent },
  {
    path: '',
    loadChildren: () => import('./blog/blog.route').then((m) => m.BLOG_ROUTE),
  },
  {
    path: '',
    loadChildren: () =>
      import('./blog/profile/profile.route').then((c) => c.PROFILE_ROUTE),
  },
];
