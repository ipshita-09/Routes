import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from './app';
import {AppRoutingRoutingModule } from './app-routing-routing-module';
import { Home } from './home/home';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingRoutingModule,
    Home
  ],
})
export class AppModule {}