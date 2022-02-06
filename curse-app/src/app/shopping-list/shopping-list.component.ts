import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Steel", 5),
    new Ingredient("Iron", 5)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onIngredientAdded(event: Ingredient) {
    this.ingredients.push(event);
  }
}
