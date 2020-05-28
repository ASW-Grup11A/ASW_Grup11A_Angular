import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListContributionsComponent} from "./list-contributions/list-contributions.component";
import {ContributionsMainComponent} from "./contributions-main/contributions-main.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: '', component: ContributionsMainComponent},
  {path: 'newest', component: ListContributionsComponent},
  {path: 'threads/:userSelected', component: ListContributionsComponent},
  {path: 'comments', component: ListContributionsComponent},
  {path: 'ask_list', component: ListContributionsComponent},
  {path: 'show_list', component: ListContributionsComponent},
  {path: 'user_page/:username', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
