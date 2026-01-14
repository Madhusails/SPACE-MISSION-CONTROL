import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { SpaceStationRoutingModule } from './space-station-routing.module';
import { SpaceStationComponent } from './space-station.component';


@NgModule({
  declarations: [SpaceStationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatGridListModule,
    SpaceStationRoutingModule
  ]
})
export class SpaceStationModule { }
