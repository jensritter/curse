import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  switchPage = new EventEmitter<string>();

  currentPage = "recipies";

  constructor() {
  }

  ngOnInit(): void {
  }

  sendOpen(newPage: string) {
    this.switchPage.emit(newPage);
    this.currentPage = newPage;
  }
}
