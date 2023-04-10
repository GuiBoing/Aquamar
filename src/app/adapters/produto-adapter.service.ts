import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoAdapterService {
  urlBase = 'http://localhost:8000'
  constructor(
    private httpClient: HttpClient,
  ) { }

  getProdutos(): Observable<Produto>{
    let url = `${this.urlBase}/produtos`
    return this.httpClient.get(url)
  }
}
