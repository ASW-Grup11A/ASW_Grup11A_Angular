import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContributionInMemoryDataService} from "./services/contribution-in-memory-data.service";
import {CommentInMemoryDataService} from "./services/comment-in-memory-data.service";
import {UserInMemoryDataService} from "./services/user-in-memory-data.service";
import {ProfileComponent} from './profile/profile.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ContributionInMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      CommentInMemoryDataService, { dataEncapsulation: false }
    ),
    HttpClientInMemoryWebApiModule.forRoot(
      UserInMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    SocialLoginModule.initialize(getAuthServiceConfigs()).providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
