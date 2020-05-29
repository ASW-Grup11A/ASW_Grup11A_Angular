import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import { NotImplementedComponent} from './not-implemented/not-implemented.component';
import { ThreadsComponent } from './threads/threads.component';
import {CommentListComponent} from './comment-list/comment-list.component';
import {UserSubmissionsComponent} from './user-submissions/user-submissions.component';
import {SubmitComponent} from './submit/submit.component';
import {MainListComponent} from './main-list/main-list.component';
import {ShowEnPageComponent} from './show-en-page/show-en-page.component';
import {AskListComponent} from './ask-list/ask-list.component';
import {VotedSubmissionsListComponent} from './voted-submissions-list/voted-submissions-list.component';
import {NewListComponent} from './new-list/new-list.component';
import {HiddenListComponent} from './hidden-list/hidden-list.component';
import {VotedCommentsListComponent} from './voted-comments-list/voted-comments-list.component';

import {ItemComponent} from './item/item.component';

const routes: Routes = [
  { path: '', component: MainListComponent},
  { path: 'user_page/:username', component: ProfileComponent},
  { path: 'threads', component: ThreadsComponent},
  { path: 'comments', component: CommentListComponent},
  { path: 'submitted', component: UserSubmissionsComponent},
  { path: 'submit', component: SubmitComponent},
  {path: 'newest', component: NewListComponent},
  {path: 'user_page/:username', component: ProfileComponent},
  { path: 'show_list', component: ShowEnPageComponent},
  { path: 'ask_list', component: AskListComponent},
  { path: 'voted_submissions', component: VotedSubmissionsListComponent},
  { path: 'voted_comments', component: VotedCommentsListComponent},
  { path: 'hidden/:username', component: HiddenListComponent},
  { path: 'item', component: ItemComponent},
  { path: '**', component: NotImplementedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
