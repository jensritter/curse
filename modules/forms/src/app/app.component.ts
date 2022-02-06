import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signupForm?: NgForm;

  defaultQuestion: string = "pet";
  answer: string = "";

  genders: string[] = ['male', 'femail']


  submitted = false;
  user = {
    username: "",
    email: "",
    secrectQuestion: "",
    answer: "",
    gender: ""
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm?.setValue({
    //   userdata: {
    //     username: suggestedName,
    //     email : 'emptyString'
    //   },
    //   secret: "pet",
    //   questionAnswer: '',
    //   gender:'male',
    // });

    // partial set value
    this.signupForm?.form.patchValue({
      userdata: {username: suggestedName}
    });
  }

  onSubmit(element: NgForm) {
    this.user.username = this.signupForm?.value.userdata.username;
    this.user.email = this.signupForm?.value.userdata.email;
    this.user.secrectQuestion = this.signupForm?.value.secret;
    this.user.answer = this.signupForm?.value.questionAnswer;
    this.user.gender = this.signupForm?.value.gender;
    this.submitted = true;

    this.signupForm?.reset();
  }
}
