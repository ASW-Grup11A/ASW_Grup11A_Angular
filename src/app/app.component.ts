import {Component} from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {ApiKeyManagerService} from './services/api-key-manager.service';
import {UtilitiesService} from './services/utilities.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Empo-News-Angular';

    constructor(
        private socialAuthService: AuthService,
        private apiKeyManagerService: ApiKeyManagerService,
        private router: Router,
    ) {
    }

    public signInWithGoogle() {
      const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

      this.socialAuthService.signIn(socialPlatformProvider)
        .then((userData) => {
          this.apiKeyManagerService.apiKey = UtilitiesService.createApiKey(
            {username: userData.email.split('@')[0], email: userData.email});
          this.apiKeyManagerService.username = userData.email.split('@')[0];
        });
    }

    goToPage(pageName: string): void{
      this.router.navigate([`${pageName}`]);
    }

  notExistsKey() {
      return this.apiKeyManagerService.apiKey === '';
  }
}
