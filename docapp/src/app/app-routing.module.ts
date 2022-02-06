import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CliComponent} from "./basic/cli/cli.component";
import {EmptyPageComponent} from "./empty-page/empty-page.component";

const routes: Routes = [
  {path: "", component: EmptyPageComponent, pathMatch: "full"},
  {path: "basic/cli", component: CliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
