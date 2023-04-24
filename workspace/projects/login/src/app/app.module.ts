import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ModuleShare } from './ng-zorro-antd.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleShare
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/login' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
