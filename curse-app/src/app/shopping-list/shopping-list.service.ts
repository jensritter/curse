import {Injectable} from "@angular/core";
import {Ingredient} from "../ingredient";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("Steel", 5),
    new Ingredient("Iron", 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  ingredientRemove(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(it => it != ingredient)
  }
}
