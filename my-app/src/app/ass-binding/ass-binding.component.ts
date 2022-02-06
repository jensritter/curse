import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-ass-binding',
  templateUrl: './ass-binding.component.html',
  styleUrls: ['./ass-binding.component.scss']
})
export class AssBindingComponent implements OnInit {
  username = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.username = "";
  }

  usernameIsEmpty() {
    return this.username === "";
  }
}
