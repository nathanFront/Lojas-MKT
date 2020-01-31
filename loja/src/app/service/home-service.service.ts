import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'http://10.2.1.124:3000';

@Injectable({
  providedIn: 'root'
})

export class HomeServiceService {

  
  constructor(private HttpClient: HttpClient) { }

  buscarTodosProdutos(): Observable<any> {
    return this.HttpClient
      .get(api +'/produtos', httpOptions)
      .pipe(map(res => res),
       );
  }

}
