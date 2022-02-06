import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  constructor() {
  }

  stringinterpolation = "{{expression}}";
  wert: string = "";
  formField: string = "";

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    console.log(event);
  }
}
