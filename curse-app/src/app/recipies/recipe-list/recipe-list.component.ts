import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipie} from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipieListener = new EventEmitter<Recipie>();

  recipies: Recipie[] = [
    new Recipie("Default", "Default Recipie", "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg"),
    new Recipie("Default2", "Default Recipie2", "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickRecipie(row: Recipie) {
    this.recipieListener.emit(row);
  }
}
