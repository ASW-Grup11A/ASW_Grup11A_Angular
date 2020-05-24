import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ContributionInMemoryDataService} from './services/contribution-in-memory-data.service';
import {CommentInMemoryDataService} from './services/comment-in-memory-data.service';
import {UserInMemoryDataService} from './services/user-in-memory-data.service';
import {ProfileComponent} from './profile/profile.component';
import {
  SocialLoginModule,
  AuthServiceConfig
} from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';
import {RouterModule} from '@angular/router';

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
    ),
    RouterModule.forRoot([
      { path: '', component: ProfileComponent},
      ]
    )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
