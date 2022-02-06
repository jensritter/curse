import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipiesComponent} from './recipies/recipies.component';
import {RecipeDetailComponent} from './recipies/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipies/recipe-list/recipe-list.component';
import {RecipieItemComponent} from './recipies/recipe-list/recipie-item/recipie-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/dropdown.directive";
import {RecipeEmptyComponent} from './recipies/recipe-empty/recipe-empty.component';
import {RecipieEditComponent} from './recipies/recipie-edit/recipie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEmptyComponent,
    RecipieEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
