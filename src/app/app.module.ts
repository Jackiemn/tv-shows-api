import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentShowsComponent } from './current-shows/current-shows.component';
import {ShowsService} from './shows.service'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrentShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
