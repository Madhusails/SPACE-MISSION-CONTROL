import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautListComponent } from './astronaut-list/astronaut-list.component';
import { AddAstronautComponent } from './add-astronaut/add-astronaut.component';

const routes: Routes = [
  { 
    path: 'astronaut', 
    loadChildren: () => import('./astronaut-list/astronaut.module').then(m => m.AstronautModule) 
  },
  { path: '', redirectTo: 'astronaut', pathMatch: 'full' },
  { path: '**', redirectTo: 'astronaut' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }