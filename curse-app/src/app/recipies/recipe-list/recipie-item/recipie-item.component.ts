import {Component, Input, OnInit} from '@angular/core';
import {Recipie} from "../../recipe";

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent implements OnInit {
  @Input()
  recipie: Recipie = new Recipie("", "", "")

  constructor() {
  }

  ngOnInit(): void {
  }

}
