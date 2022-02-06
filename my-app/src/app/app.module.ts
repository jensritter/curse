import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageMenuComponent} from './page-menu/page-menu.component';
import {ApplistComponent} from './applist/applist.component';
import {AssignmentMsgokComponent} from './assignment-msgok/assignment-msgok.component';
import {AssignmentMsgfailComponent} from './assignment-msgfail/assignment-msgfail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageMenuComponent,
    ApplistComponent,
    AssignmentMsgokComponent,
    AssignmentMsgfailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
