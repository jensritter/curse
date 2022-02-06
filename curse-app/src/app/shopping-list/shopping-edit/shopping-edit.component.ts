import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../ingredient";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("inputName") inputName?: ElementRef;
  @ViewChild("inputAmount") inputAmount?: ElementRef;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addNew(inputName: HTMLInputElement, inputAmount: HTMLInputElement) {
    const name = inputName.value;
    const amount = inputAmount.value;
    console.log(inputName);

    this.ingredientAdded.emit(new Ingredient(name, parseInt(amount)))
  }
}
