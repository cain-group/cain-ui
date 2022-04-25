import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CainUIModule } from '@cain-group/cain-ui-angular/dist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CainUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
