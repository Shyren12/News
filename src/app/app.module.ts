import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { newsReductor } from 'src/NGRX/reductors/news.redector';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from'@angular/common/http'
import { NewsEffect } from 'src/NGRX/effects/news.effect';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      news: newsReductor
    }, {}),
    EffectsModule.forRoot([NewsEffect]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
