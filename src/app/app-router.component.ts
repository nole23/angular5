import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionComponent } from './connection/connection.component';

const routes: Routes = [
	{ path: '', component: ConnectionComponent}
];

@NgModule({
	imports: [
		CommonModule,
  		BrowserModule,
  		RouterModule.forRoot(routes)
	],
	exports: []
})
export class AppRouterComponent { }