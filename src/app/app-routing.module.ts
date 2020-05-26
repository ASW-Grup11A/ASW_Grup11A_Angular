import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'user_page/:username', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
