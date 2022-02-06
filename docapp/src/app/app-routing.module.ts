import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CliComponent} from "./basic/cli/cli.component";
import {EmptyPageComponent} from "./empty-page/empty-page.component";
import {DatabindingComponent} from "./basic/databinding/databinding.component";
import {StructureComponent} from "./basic/structure/structure.component";
import {DirectivesComponent} from "./basic/directives/directives.component";
import {NgclassComponent} from "./basic/directives/ngclass/ngclass.component";
import {NgforComponent} from "./basic/directives/ngfor/ngfor.component";
import {NgifComponent} from "./basic/directives/ngif/ngif.component";
import {NgstyleComponent} from "./basic/directives/ngstyle/ngstyle.component";
import {NgswitchComponent} from "./basic/directives/ngswitch/ngswitch.component";
import {CustomComponent} from "./basic/directives/custom/custom.component";
import {FormsComponent} from "./forms/forms.component";
import {TemplatesComponent} from "./forms/templates/templates.component";
import {PatchComponent} from "./forms/patch/patch.component";
import {ValidatorsComponent} from "./forms/validators/validators.component";

const routes: Routes = [
  {path: "", component: EmptyPageComponent, pathMatch: "full"},
  {path: "basic/cli", component: CliComponent},
  {path: "basic/structure", component: StructureComponent},
  {path: "basic/databinding", component: DatabindingComponent},
  {
    path: "basic/directives", component: DirectivesComponent, children: [
      {path: "ngclass", component: NgclassComponent},
      {path: "ngfor", component: NgforComponent},
      {path: "ngif", component: NgifComponent},
      {path: "ngstyle", component: NgstyleComponent},
      {path: "ngswitch", component: NgswitchComponent},
      {path: "custom", component: CustomComponent},
    ]
  },
  {
    path: "forms", component: FormsComponent, children: [
      {path: "template", component: TemplatesComponent},
      {path: "patch", component: PatchComponent},
      {path: "other", component: EmptyPageComponent}
    ]
  },
  {path: "forms-validators", component: ValidatorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
