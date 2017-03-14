import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GestureComponent } from './gesture/gesture.component';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    GestureComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
