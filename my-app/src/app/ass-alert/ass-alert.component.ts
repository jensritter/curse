import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ass-alert',
  templateUrl: './ass-alert.component.html',
  styleUrls: ['./ass-alert.component.scss']
})
export class AssAlertComponent {

  @Input()
  message = "DefaultMessage";

  cssclass = "alert-success";

  @Input()
  get success(): boolean {
    return this.cssclass === "alert-success";
  }

  set success(value: boolean) {
    if (value) {
      this.cssclass = "alert-success";
    } else {
      this.cssclass = "alert-danger";
    }
  }
/*
  constructor() {
    setTimeout(() => {this.successFlipper();}, 50);
  }

  successFlipper() {
    if (this.cssclass === "alert-success") {
      this.cssclass = "alert-danger";
    } else {
      this.cssclass = "alert-success";
    }
    //console.log("flipping " + this.constructor.name + " " +Date.now())
    setTimeout(() => {this.successFlipper();},50);
  }
*/
}
