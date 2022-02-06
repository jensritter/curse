import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fetch-random',
  templateUrl: './fetch-random.component.html',
  styleUrls: ['./fetch-random.component.scss']
})
export class FetchRandomComponent implements OnInit {
  logging: LogItem[] = [];

  applications: TcApp[] = []
  remote?: RandomData;

  constructor(private http: HttpClient) {
    this.doFetchRemote();
  }

  log(text: string, level?: number) {
    this.logging.push(new LogItem(text, level));
  }


  ngOnInit(): void {
    this.log("init component", LogItem.DEBUG);
  }

  doFetch() {
    this.log("begin Fetch", LogItem.DEBUG);
    const api = "http://localhost:8080/api/random";
    this.log("Request Data from " + api);
    this.http.get<RandomData>("http://localhost:8080/api/random")
      .subscribe(response => {
        this.log("Got Response " + response.value)
        this.remote = response;
      });
  }

  doFetchRemote() {

    const api = "http://duke2.mitegro.net:10000/api/list";
    this.http.get<TcApp[]>(api)
      .subscribe(list => {
        this.applications = list.filter(item => item.bootApp);
        this.log("done Http-AppList");

        for (let item of list) {
          const url = item.url + "/boot/info";
          //console.log(url);
          this.http.get<BootInfo>(url)
            .subscribe(info => {
              this.log("Done");
            });
        }
      });
  }
}

interface BootInfo {
  //https://stackoverflow.com/questions/64828112/in-angular-how-do-i-prevent-concurrent-requests-from-being-blocked
  git: BootInfoGit,
  build: BootInfoBuild;
  spring: string;
  springboot: string;
  jmx: string;
}

interface BootInfoGit {
  branch: string;
  commit: BootInfoGitCommit
}

interface BootInfoGitCommit {
  id: string;
  time: string;
}

interface BootInfoBuild {
  urls: string[];
  version: string;
  artifact: string;
  name: string;
  time: string;
  group: string;
}

interface TcApp {
  name: string;
  url: string;
  bootApp: boolean;
}

interface RandomData {
  value: string;
  intValue: number;
  bool: boolean
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
