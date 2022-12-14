import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BfiCommonModule } from './bfi-common/bfi-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BfiCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
