import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CliComponent} from "./basic/cli/cli.component";

const routes: Routes = [
  {path: "basic/cli", component: CliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
