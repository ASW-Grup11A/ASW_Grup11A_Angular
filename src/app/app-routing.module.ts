import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";

const routes: Routes = [
  {path: '', component: TopBarComponent},
  {path: ':filter', component: TopBarComponent},
  {path: ':filter/:userSelected', component: TopBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
