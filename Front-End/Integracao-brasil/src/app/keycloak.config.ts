import { KeycloakServerConfig } from 'keycloak-js';

export const keycloakConfig: KeycloakServerConfig = {
  url: 'https://auth.headsoft.com.br',
  realm: 'headsoft',
  clientId: 'headsoft-web'
};
