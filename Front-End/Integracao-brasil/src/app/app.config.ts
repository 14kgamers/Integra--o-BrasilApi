import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideKeycloak,
  withAutoRefreshToken
} from 'keycloak-angular';

import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  provideTranslateService,
  TranslateLoader
} from '@ngx-translate/core';

import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';






export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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


    }),
        provideTranslateService({
          loader: provideTranslateHttpLoader({
            prefix: './assets/i18n/',
            suffix: '.json'
          })
        })

  ]
};
