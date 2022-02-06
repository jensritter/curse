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
  showDetails: boolean = false;
  assLog: LogItem[] = [];

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

  toggle() {
    this.showDetails = !this.showDetails
    this.assLog.push(new LogItem(this.assLog.length, "current status " + this.showDetails));
  }
}

export class LogItem {
  id: number;
  text: string;
  timestamp: Date;


  constructor(counter: number, txt: string) {
    this.id = counter;
    this.text = txt;
    this.timestamp = new Date();
  }


}
