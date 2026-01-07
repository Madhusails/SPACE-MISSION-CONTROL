import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "/spaceship", pathMatch: "full" },
    {
        path: "spaceship",
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4400/remoteEntry.js',
                remoteName: 'spaceShipMfe',
                exposedModule: './SpaceshipModule'
            }).then(m => m.SpaceshipModule).catch(err => console.error(err));
        }
    }
];
