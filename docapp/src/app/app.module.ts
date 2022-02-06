import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {CliComponent} from './basic/cli/cli.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {EmptyPageComponent} from './empty-page/empty-page.component';
import {LinkComponent} from './link/link.component';
import {DatabindingComponent} from './basic/databinding/databinding.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import {StructureComponent} from './basic/structure/structure.component';
import {DirectivesComponent} from './basic/directives/directives.component';
import {NgforComponent} from './basic/directives/ngfor/ngfor.component';
import {NgifComponent} from './basic/directives/ngif/ngif.component';
import {NgclassComponent} from './basic/directives/ngclass/ngclass.component';
import {NgstyleComponent} from './basic/directives/ngstyle/ngstyle.component';
import {NgswitchComponent} from './basic/directives/ngswitch/ngswitch.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CustomComponent} from './basic/directives/custom/custom.component';
import {FormsComponent} from './forms/forms.component';
import {TemplatesComponent} from './forms/templates/templates.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    EmptyPageComponent,
    LinkComponent,
    DatabindingComponent,
    StructureComponent,
    DirectivesComponent,
    NgforComponent,
    NgifComponent,
    NgclassComponent,
    NgstyleComponent,
    NgswitchComponent,
    CustomComponent,
    FormsComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    FormsModule,
    MatTabsModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
