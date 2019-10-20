import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './Category/Category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material';


const material = [
   MatTableModule
];

@NgModule({
   declarations: [
      AppComponent,
      CategoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      material
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
