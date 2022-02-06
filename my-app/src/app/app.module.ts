import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageMenuComponent} from './page-menu/page-menu.component';
import {ApplistComponent} from './applist/applist.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageMenuComponent,
    ApplistComponent
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
