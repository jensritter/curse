import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fetch-random',
  templateUrl: './fetch-random.component.html',
  styleUrls: ['./fetch-random.component.scss']
})
export class FetchRandomComponent implements OnInit {
  value: string = ""
  logging: LogItem[] = [];

  constructor() {
  }

  log(text: string, level?: number) {
    this.logging.push(new LogItem(text, level));
  }


  ngOnInit(): void {
    this.log("init component", LogItem.DEBUG);
  }

  doFetch() {
    this.log("begin Fetch", LogItem.DEBUG);
  }

}


class LogItem {
  ts: Date;
  text: string;
  level: number;

  static DEBUG: number = -1;
  static INFO: number = 0;
  static WARN: number = 1;
  static ERROR: number = 2;

  constructor(text: string, level?: number) {
    this.ts = new Date();
    this.text = text;
    this.level = level ? level : 0;
  }

  levelClass() {
    if (this.level === LogItem.DEBUG) {
      return "log-debug";
    }
    if (this.level == LogItem.INFO) {
      return "log-info";
    }
    if (this.level == LogItem.WARN) {
      return "log-warn";
    }
    if (this.level == LogItem.ERROR) {
      return "log-error";
    }
    return "log-undefinied";
  }
}
