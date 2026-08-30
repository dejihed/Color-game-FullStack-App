import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes'; // Import the routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provide the routes
    importProvidersFrom(HttpClientModule), // Import HttpClientModule globally
  ],
};
