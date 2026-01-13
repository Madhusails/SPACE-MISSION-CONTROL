import { RouterModule, Routes } from "@angular/router";
import { AstronautListComponent } from "./astronaut-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path:"", component: AstronautListComponent , pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AstronautRoutingModule {}