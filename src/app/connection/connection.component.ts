import { Component, OnInit } from '@angular/core';

import { ConnextService } from '../connext.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

	someProperty:string = '';
	listCar:string[];
	restResponse:string[];
  constructor(private serv: ConnextService) { }

  ngOnInit() {
  	this.listCar = this.serv.cars;

  	this.someProperty = this.serv.myData();

  	this.serv.myServerData().subscribe(data => {
  		console.log(data);
  		this.restResponse = data;
  	})
  }


}
