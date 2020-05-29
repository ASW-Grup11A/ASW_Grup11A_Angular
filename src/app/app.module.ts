import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {getAuthServiceConfigs} from './socialloginConfig';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import {SubmitComponent} from './submit/submit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { ThreadsComponent } from './threads/threads.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';
import { MainListComponent } from './main-list/main-list.component';
import { NewListComponent } from './new-list/new-list.component';
import { ShowEnPageComponent } from './show-en-page/show-en-page.component';
import { AskListComponent } from './ask-list/ask-list.component';
import { VotedSubmissionsListComponent } from './voted-submissions-list/voted-submissions-list.component';
import { HiddenListComponent } from './hidden-list/hidden-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TopBarComponent,
    BottomBarComponent,
    SubmitComponent,
    ProfileComponent,
    NotImplementedComponent,
    ThreadsComponent,
    DateAgoPipe,
    CommentListComponent,
    UserSubmissionsComponent,
    MainListComponent,
    NewListComponent,
    ShowEnPageComponent,
    AskListComponent,
    VotedSubmissionsListComponent,
    HiddenListComponent,
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
