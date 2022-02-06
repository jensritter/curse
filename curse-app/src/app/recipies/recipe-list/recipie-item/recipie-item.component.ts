import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from "../../recipe";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {

  recipie: Recipie = new Recipie("", "", "", []);

  @Input()
  id: number = 0;

  constructor(private recipieService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipie = this.recipieService.getRecipie(this.id);
  }

}
