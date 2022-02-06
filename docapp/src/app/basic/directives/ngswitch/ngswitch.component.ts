import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
  field: string = "";
  numField: number = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    const target = <HTMLInputElement>event.target;
    const value = target.value;
    this.numField = parseInt(value);
  }
}
