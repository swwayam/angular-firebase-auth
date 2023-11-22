import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideFirebase} from '@angular/fire/app'

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
