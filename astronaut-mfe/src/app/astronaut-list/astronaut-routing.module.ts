import { RouterModule, Routes } from "@angular/router";
import { AstronautListComponent } from "./astronaut-list.component";
import { NgModule } from "@angular/core";
import { AddAstronautComponent } from "../add-astronaut/add-astronaut.component";

const routes: Routes = [
    // { path: '', redirectTo: 'astronaut', pathMatch: 'full' },
    { path: '', component: AstronautListComponent }, // The list (default)
    { path: 'add', component: AddAstronautComponent } // The add page
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AstronautRoutingModule {}