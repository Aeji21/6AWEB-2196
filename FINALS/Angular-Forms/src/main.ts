import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // Changed 'App' to 'AppComponent'
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig) // Changed 'App' to 'AppComponent'
  .catch(err => console.error(err));