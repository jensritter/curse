import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipiesComponent} from "./recipies/recipies.component";

const routes: Routes = [
  {path: "", redirectTo: "/recipies", pathMatch: "full"},
  {path: "recipies", component: RecipiesComponent},
  {path: "shopping-list", component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
