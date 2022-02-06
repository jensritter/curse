import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from "../../recipe";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {
  @Input()
  recipie: Recipie = new Recipie("", "", "", []);

  constructor(private recipieService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipieService.recipieSelected.emit(this.recipie);
  }
}
