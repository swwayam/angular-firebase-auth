import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
]
};
