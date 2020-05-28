import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {getAuthServiceConfigs} from './socialloginConfig';
import {AppComponent} from './app.component';
import {SubmitComponent} from './submit/submit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ThreadsComponent } from './threads/threads.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';
import { ShowEnPageComponent } from './show-en-page/show-en-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    ProfileComponent,
    NotImplementedComponent,
    MainPageComponent,
    ThreadsComponent,
    DateAgoPipe,
    CommentListComponent,
    UserSubmissionsComponent,
    ShowEnPageComponent,
  ],
    imports: [
        SocialLoginModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
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
