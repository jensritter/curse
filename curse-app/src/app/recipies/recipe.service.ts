import {EventEmitter, Injectable} from "@angular/core";
import {Recipie} from "./recipe";

@Injectable()
export class RecipeService {

  recipieSelected = new EventEmitter<Recipie>();

  private recipies: Recipie[] = [
    new Recipie("Default", "Default Recipie", "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg"),
    new Recipie("Default2", "Default Recipie2", "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg")
  ];

  getRecipies() {
    return this.recipies.slice();
  }


}
