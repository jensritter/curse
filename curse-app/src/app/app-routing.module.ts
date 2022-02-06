import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipiesComponent} from "./recipies/recipies.component";
import {RecipeDetailComponent} from "./recipies/recipe-detail/recipe-detail.component";

const routes: Routes = [
  {path: "", redirectTo: "/recipies", pathMatch: "full"},
  {
    path: "recipies", component: RecipiesComponent, children: [
      {path: ":id", component: RecipeDetailComponent,}
    ]
  },
  {path: "shopping-list", component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
