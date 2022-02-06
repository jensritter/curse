import {Injectable} from "@angular/core";
import {Recipie} from "./recipe";
import {Ingredient} from "../ingredient";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private IMAGELINK: string = "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg";

  constructor(private shoppingService: ShoppingListService) {
  }

  private recipies: Recipie[] = [
    new Recipie("Tasty Schnitzel",
      "Tasty Schnitzel",
      "/assets/schnitzel.jpg", [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20),
      ]
    ),
    new Recipie(
      "Big Fat Burger",
      "What else you need to say?",
      "/assets/burger.jpg", [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
      ])
  ];

  getRecipies() {
    return this.recipies.slice();
  }

  getRecipie(idx: number) {
    return this.recipies[idx];
  }

  addToShoppingList(recipie: Recipie) {
    this.shoppingService.ingredientAddAll(recipie.ingredients);
  }

}
