import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListContributionsComponent} from "./list-contributions/list-contributions.component";
import {ContributionsMainComponent} from "./contributions-main/contributions-main.component";
import {ProfileComponent} from "./profile/profile.component";
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './profile/profile.component';
import { MainPageComponent} from './main-page/main-page.component';
import { NotImplementedComponent} from './not-implemented/not-implemented.component';
import { ThreadsComponent } from './threads/threads.component';
import {SubmitComponent} from './submit/submit.component';

const routes: Routes = [
  {path: '', component: ContributionsMainComponent},
  {path: 'newest', component: ListContributionsComponent},
  {path: 'threads/:userSelected', component: ListContributionsComponent},
  {path: 'comments', component: ListContributionsComponent},
  {path: 'ask_list', component: ListContributionsComponent},
  {path: 'show_list', component: ListContributionsComponent},
  {path: 'user_page/:username', component: ProfileComponent}
];
const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'user_page/:username', component: ProfileComponent},
  { path: 'threads/:username', component: ThreadsComponent},
  { path: 'submit', component: SubmitComponent},
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
