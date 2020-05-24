import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SubmitComponent} from './submit/submit.component';

const routes: Routes = [
    {path: '', component: ProfileComponent},
    {path: 'submit', component: SubmitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
