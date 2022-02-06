import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  availableTypes: string[] = [
    "Basic", "Advanced", "Pro"
  ]
  defaultSub: number = 1;

  onSubmit(form: NgForm) {
    console.log(form);
    const mail = form.value.mail;
    const sub = form.value.sub;
    const pass = form.value.pass;

    console.log({mail: mail, sub: sub, pass: pass})
  }

}
