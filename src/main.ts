import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTE } from './app/app.route';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTE)],
}).catch((err) => console.error(err));

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
