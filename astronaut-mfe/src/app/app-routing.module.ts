import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautListComponent } from './astronaut-list/astronaut-list.component';
import { AddAstronautComponent } from './add-astronaut/add-astronaut.component';

const routes: Routes = [
  { path: 'astronaut', component: AstronautListComponent , pathMatch: 'full' },
  { path: 'add', component: AddAstronautComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }