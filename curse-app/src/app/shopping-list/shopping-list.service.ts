import {Injectable} from "@angular/core";
import {Ingredient} from "../ingredient";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  //changedEvents = new EventEmitter<Ingredient[]>();
  changedEvents = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Steel", 5),
    new Ingredient("Iron", 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.changedEvents.emit(this.getIngredients());
    this.changedEvents.next(this.getIngredients());
    console.log("Added to ShoppingList: ", ingredient);
  }

  ingredientAddAll(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.changedEvents.next(this.getIngredients());
    console.log("Added to ShoppingList: ", ingredients);
  }

}
