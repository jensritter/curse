import {Component, OnInit} from '@angular/core';
import {Recipie} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipieService: RecipeService) {
  }

  recipies: Recipie[] = [];

  ngOnInit(): void {
    this.recipies = this.recipieService.getRecipies();
  }

}
