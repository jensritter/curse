import {Component, OnInit} from '@angular/core';
import {Recipie} from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie("Default", "Default Recipie", "https://www.taste-and-more.ch/media/image/5b/10/66/Mie-Noodels-Asiatisch-by-taste-and-more-ch_600x600.jpg")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
