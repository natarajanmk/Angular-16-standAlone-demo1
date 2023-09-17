import { Route } from '@angular/router';

export const BLOG_ROUTE: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./contactus/contactus.component').then(
        (c) => c.ContactusComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

//this is another way
// export default [
//   { path: 'products', component: ProductsComponent },
//   { path: 'contact-us', component: ContactusComponent },
// ] as Route[]

//if the above case:
//loadChildren: () => import('./components/lazy.route'),
