import { Component } from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Empo-News-Angular';
  constructor( private socialAuthService: AuthService ) {}
  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider)
      .then((userData) => {
        console.log('email is', userData.email.toString());
        console.log('name is', userData.name);

      });
  }

}
