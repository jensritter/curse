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

  constructor() {
  }

}
