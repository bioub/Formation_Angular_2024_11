import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { UserService } from './users/user.service';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), provideClientHydration(),

    // Association clé / objet
    // {
    //   provide: UserService,
    //   useValue: {
    //     getAll() {
    //     }
    //   }
    // }

    // Association clé / function (qui sera appelé à la demande 1 seule fois)
    // {
    //   provide: UserService,
    //   useFactory: (httpClient) => {
    //     return new UserService(httpClient, '/users');
    //   },
    //   deps: [HttpClient]
    // }

    // Association clé / clé (ici UserGraphQLService doit aussi être configuré dans providers)
    // {
    //   provide: UserService,
    //   useExisting: UserGraphQLService,
    // }

    // Association clé / class
    // l'injecteur va analyser les dépendances de la classes
    // Mode automatique
    // {
    //   provide: UserService,
    //   useClass: UserService
    // }

    // si provide === useClass
    // UserService
  ],
};
