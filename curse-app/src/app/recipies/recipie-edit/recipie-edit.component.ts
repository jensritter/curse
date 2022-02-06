import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.scss']
})
export class RecipieEditComponent implements OnInit {

  id: number = 0;
  editMode: boolean = false;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = parseInt(params["id"]);
      this.editMode = params["id"] != null;
    });
  }

}
