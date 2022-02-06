import {Ingredient} from "../ingredient";

export class Recipie {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {
  }
}
