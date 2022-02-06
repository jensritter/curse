import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  user?: { name: string, vorname: string, strasse: string };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.user = {
      name: form.value.user.name,
      vorname: form.value.user.surname,
      strasse: form.value.details.street
    }
  }
}
