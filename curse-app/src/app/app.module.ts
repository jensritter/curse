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
import {ShppingEditComponent} from './shopping-list/shpping-edit/shpping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
