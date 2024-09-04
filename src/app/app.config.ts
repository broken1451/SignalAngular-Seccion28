import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation(), withViewTransitions({
      skipInitialTransition: true,
      onViewTransitionCreated(transitionInfo) {
        // console.log ('View transition created:', transitionInfo);
      },
    })),
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()
  ]
};
