import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const enhancedAppConfig = {
  ...appConfig,
  providers: [
    provideHttpClient(withFetch()) // Enable fetch API
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
