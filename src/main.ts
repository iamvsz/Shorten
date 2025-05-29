import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';

import { AuthInterceptor } from './app/auth.interceptor';
import { provideHttpInterceptor } from './provide-http-interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpInterceptor(AuthInterceptor)
  ]
});