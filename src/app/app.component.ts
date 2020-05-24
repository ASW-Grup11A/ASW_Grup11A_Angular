import {Component} from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {ApiKeyManagerService} from './services/api-key-manager.service';
import {UtilitiesService} from './services/utilities.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Empo-News-Angular';

    constructor(
        private socialAuthService: AuthService,
        private apiKeyManagerService: ApiKeyManagerService
    ) {
    }

    public signInWithGoogle() {
        const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

        this.socialAuthService.signIn(socialPlatformProvider)
            .then((userData) => {
                this.apiKeyManagerService.apiKey = UtilitiesService.createApiKey(
                    {username: userData.email.split('@')[0], email: userData.email});
            });
    }

}
