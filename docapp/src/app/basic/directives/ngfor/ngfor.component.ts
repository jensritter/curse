import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  row: string[] = ["A", "B", "C"];

  constructor() {
  }

  ngOnInit(): void {
  }

}
