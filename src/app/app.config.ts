import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'//importo el httpclient para optener datos de la API

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
  provideHttpClient()
]
};
