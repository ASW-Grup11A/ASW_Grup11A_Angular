import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("503458539250-o3r2l4ut7ccd7id6itoats2j0eub0d4j.apps.googleusercontent.com")
    }
  ]);

  return config;
}
