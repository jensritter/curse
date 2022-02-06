import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  clickvalue: string = "";
  clickcounter: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onBtnClicked(event: Event) {
    this.clickcounter++;
    this.clickvalue = this.clickcounter + "x Clicked";
  }

}
