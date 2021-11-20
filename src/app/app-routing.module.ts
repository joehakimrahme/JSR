import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouletteComponent } from "./roulette/roulette.component";
import { RulesComponent } from "./rules/rules.component";

const routes: Routes = [
  { path: "roulette", component: RouletteComponent },
  { path: "rules", component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
