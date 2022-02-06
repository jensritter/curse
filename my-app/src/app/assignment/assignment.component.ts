import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  name: string = "";
  servers: string[] = [];
  alert: string = "";
  alertIsOk = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.servers.push(this.name);
    this.alertIsOk = Math.random() > 0.5;
    console.log("Alert is : ", this.alertIsOk);
    this.name = "";
    this.alert = this.servers.join(",");
  }

  serverListUsed() {
    return this.servers.length > 0;
  }

}
