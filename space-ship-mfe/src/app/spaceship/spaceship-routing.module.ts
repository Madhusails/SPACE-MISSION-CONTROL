import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipComponent } from './spaceship.component';

const routes: Routes = [
  { path: "", component: SpaceshipComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipRoutingModule { }
