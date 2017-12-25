import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { ConnextService } from './connext.service';

import { AppRouterComponent } from './app-router.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRouterComponent,
    HttpClientModule
  ],
  providers: [ConnextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
