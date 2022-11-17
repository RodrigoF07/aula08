import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
 
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
