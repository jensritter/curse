import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  selected: string = "";

  ngOnInit(): void {
    // get path from (complete) current path :
    const i = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = i.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
    if (s.length > 1) {
      this.selected = s[1].toString();
    }
  }

  changePage(form: NgForm) {
    // console.log(form);
    console.log(form.value);
    switch (form.value.selection) {
      case "template":
      case "patch":
        this.router.navigate(["forms", form.value.selection]);
        break;
      case "other":
        console.log("unimplemented : selected other")
        break;
      default:
        alert("Unknown selection");
        break;
    }
  }
}
