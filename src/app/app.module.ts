import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ShibComponent } from './shib/shib.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ShibComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
