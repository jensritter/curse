import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageMenuComponent} from './page-menu/page-menu.component';
import {ApplistComponent} from './applist/applist.component';
import {AssignmentComponent} from './assignment/assignment.component';
import {AssAlertComponent} from './ass-alert/ass-alert.component';
import {AssBindingComponent} from './ass-binding/ass-binding.component';
import {FetchRandomComponent} from './fetch-random/fetch-random.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageMenuComponent,
    ApplistComponent,
    AssignmentComponent,
    AssAlertComponent,
    AssBindingComponent,
    FetchRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
