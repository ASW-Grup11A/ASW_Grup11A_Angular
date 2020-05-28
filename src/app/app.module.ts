import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {getAuthServiceConfigs} from './socialloginConfig';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListContributionsComponent } from './list-contributions/list-contributions.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ContributionsMainComponent } from './contributions-main/contributions-main.component';
import {SubmitComponent} from './submit/submit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ThreadsComponent } from './threads/threads.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TopBarComponent,
    ListContributionsComponent,
    BottomBarComponent,
    ContributionsMainComponent,
    SubmitComponent,
    ProfileComponent,
    NotImplementedComponent,
    MainPageComponent,
    ThreadsComponent,
    DateAgoPipe,
    CommentListComponent,
    UserSubmissionsComponent,
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
