import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../ingredient";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("inputName") inputName?: ElementRef;
  @ViewChild("inputAmount") inputAmount?: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  addNew(inputName: HTMLInputElement, inputAmount: HTMLInputElement) {
    const name = inputName.value;
    const amount = inputAmount.value;
    const ingredient = new Ingredient(name, parseInt(amount));
    this.shoppingService.ingredientAdd(ingredient);
  }
}
