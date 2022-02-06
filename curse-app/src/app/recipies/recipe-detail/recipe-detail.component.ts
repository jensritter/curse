import {Component, OnInit} from '@angular/core';
import {Recipie} from "../recipe";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipie = new Recipie("", "", "", [])

  constructor(private recipieService: RecipeService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      const id = parseInt(data["id"])
      this.recipie = this.recipieService.getRecipie(id);
    });
  }

  toShoppingList() {
    this.recipieService.addToShoppingList(this.recipie);
  }
}
