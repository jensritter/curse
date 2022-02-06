import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from "../../recipe";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {

  recipie: Recipie = new Recipie("", "", "", []);

  @Input()
  id: number = 0;

  constructor(private recipieService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipie = this.recipieService.getRecipies()[this.id];
  }

  onSelected() {
    //this.recipieService.recipieSelected.emit(this.recipie);
    this.router.navigate([this.id], {relativeTo: this.activeRoute});
  }
}
