import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import {map, mergeMap} from 'rxjs/operators';

import { Solicitacao } from '../entidades/solicitacaoEntity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'http://10.2.124:3000'

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoServiceService {

  constructor(private HttpClient: HttpClient) { }
  
  solicitarProduto(pedidos:Solicitacao): Observable<any>{
    return this.HttpClient
    .post(api + '/solicitacao', pedidos, httpOptions)
    .pipe(
      map( res => res),
    );
  }
}