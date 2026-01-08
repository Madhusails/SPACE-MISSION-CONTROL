import { Routes } from '@angular/router';
import { SpaceshipComponent } from './spaceship/spaceship.component';

export const routes: Routes = [
    { path: '', component: SpaceshipComponent, pathMatch: 'full' }
];
