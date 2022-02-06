import {Component, OnInit} from '@angular/core';
import {Recipie} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipie = new Recipie("", "", "", [])

  constructor(private recipieService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipieService.recipieSelected.subscribe(it => {
      this.recipie = it;
    });
  }

  toShoppingList() {
    this.recipieService.addToShoppingList(this.recipie);
  }
}
