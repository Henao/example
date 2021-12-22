import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://siais.vco.com.co:1003/auth/',
          realm: 'master',
          clientId: 'front-medicamentos',
        },
        initOptions: {
            checkLoginIframe: true,
            checkLoginIframeInterval: 25
        //   onLoad: 'check-sso',
        //   silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        },
        loadUserProfileAtStartUp: true
      });
  }
  