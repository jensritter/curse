import {EventEmitter, Injectable} from "@angular/core";
import {Recipie} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {

  private IMAGELINK: string = "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg";

  recipieSelected = new EventEmitter<Recipie>();

  private recipies: Recipie[] = [
    new Recipie("Tasty Schnitzel",
      "Tasty Schnitzel",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20),
      ]
    ),
    new Recipie(
      "Big Fat Burger",
      "What else you need to say?",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg", [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
      ])
  ];

  getRecipies() {
    return this.recipies.slice();
  }


}
