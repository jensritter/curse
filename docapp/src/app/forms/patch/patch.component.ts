import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.scss']
})
export class PatchComponent implements OnInit {

  @ViewChild("form", {static: true})
  form?: NgForm;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

  fillForm(form: NgForm) {
    form.setValue({name: 'name', vorname: 'vorname'})
  }

  fillName() {
    this.form?.form.patchValue({name: 'nameOnly'});
  }
}
