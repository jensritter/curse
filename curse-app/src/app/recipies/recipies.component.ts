import {Component, OnInit} from '@angular/core';
import {Recipie} from "./recipe";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {
  currentRecipie: Recipie = new Recipie("", "", "");

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipieClick(event: Recipie) {
    this.currentRecipie = event;
  }
}
