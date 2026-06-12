import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideKeycloak,
  withAutoRefreshToken
} from 'keycloak-angular';

import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

    provideKeycloak({
      config: {
        url: 'https://auth.headsoft.com.br',
        realm: 'headsoft',
        clientId: 'headsoft-web'
      },

      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        redirectUri:
        'http://localhost:5197/api/logged-user/redirect'
      },


    })
  ]
};
