import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
