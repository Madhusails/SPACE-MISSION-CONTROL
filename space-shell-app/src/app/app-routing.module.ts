import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "spaceship",
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4400/remoteEntry.js',
                remoteName: 'spaceShipMfe',
                exposedModule: './SpaceshipModule'
            }).then(m => m.SpaceshipModule).catch(err => {
                console.error('Error loading Spaceship module', err);
            });
        }
    },
    {
        path: "astronaut",
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4300/remoteEntry.js',
                remoteName: 'astronautMfe',
                exposedModule: './AstronautModule'
            }).then(m => m.AstronautModule).catch(err => {
                console.error('Error loading Astronaut module', err);
            });
        }
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }