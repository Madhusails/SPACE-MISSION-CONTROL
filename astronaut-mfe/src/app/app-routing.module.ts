import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautListComponent } from './astronaut-list/astronaut-list.component';

const routes: Routes = [
  { path: "", component: AstronautListComponent , pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }