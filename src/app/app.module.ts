import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {
  SocialLoginModule,
  AuthServiceConfig
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
    HttpClientModule
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
