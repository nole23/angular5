import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnextService {

  constructor(private http: HttpClient) { }

  cars = [
  	'Ford', 'Chevrolet', 'Bick'
  ];

  user: string[];

  myData() {

  	return 'This is my data, man!';
  }

/*
  myServerData(nesto) {
  	this.http.get('http://localhost:8080/prvi/drugi').subscribe(data => nesto);
  }
*/

  myServerData(): Observable<any> {
    return this.http.get('http://localhost:8080/prvi/drugi');
  }
}
