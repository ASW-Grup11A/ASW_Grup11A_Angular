import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListContributionsComponent} from "./list-contributions/list-contributions.component";
import {ProfileComponent} from "./profile/profile.component";
import { NotImplementedComponent} from './not-implemented/not-implemented.component';
import { ThreadsComponent } from './threads/threads.component';
import {CommentListComponent} from "./comment-list/comment-list.component";
import {UserSubmissionsComponent} from "./user-submissions/user-submissions.component";
import {SubmitComponent} from './submit/submit.component';
import {MainListComponent} from "./main-list/main-list.component";


const routes: Routes = [
  { path: '', component: MainListComponent},
  { path: 'user_page/:username', component: ProfileComponent},
  { path: 'threads/:username', component: ThreadsComponent},
  { path: 'comments', component: CommentListComponent},
  { path: 'submitted', component: UserSubmissionsComponent},
  { path: 'submit', component: SubmitComponent},
  {path: 'newest', component: ListContributionsComponent},
  {path: 'threads/:userSelected', component: ListContributionsComponent},
  {path: 'comments', component: ListContributionsComponent},
  {path: 'ask_list', component: ListContributionsComponent},
  {path: 'show_list', component: ListContributionsComponent},
  {path: 'user_page/:username', component: ProfileComponent},
  { path: '**', component: NotImplementedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
