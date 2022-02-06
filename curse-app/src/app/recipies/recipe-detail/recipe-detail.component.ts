import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from "../recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  recipie = new Recipie("", "", "")

  constructor() {
  }

  ngOnInit(): void {
  }

}
