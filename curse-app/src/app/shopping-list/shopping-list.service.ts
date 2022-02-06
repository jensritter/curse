import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../ingredient";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  changedEvents = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Steel", 5),
    new Ingredient("Iron", 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changedEvents.emit(this.getIngredients());
  }

  ingredientRemove(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(it => it != ingredient);
    this.changedEvents.emit(this.getIngredients());
  }
}
