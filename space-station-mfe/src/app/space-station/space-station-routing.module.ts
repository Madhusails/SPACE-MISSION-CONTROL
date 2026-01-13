import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceStationComponent } from './space-station.component';

const routes: Routes = [
  { path: "", component: SpaceStationComponent , pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceStationRoutingModule { }
