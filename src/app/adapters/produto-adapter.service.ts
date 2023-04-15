import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProdutoAdapterService {
  urlBase = environment.backendUrl
  constructor(
    private httpClient: HttpClient,
  ) { }

  getProdutos(): Observable<any> {
    let url = `${this.urlBase}/produtos`
    return this.httpClient.get<any>(url)
  }
  getProdutosById(produtoId): Observable<any> {
    let url = `${this.urlBase}/produtos/${produtoId}`
    return this.httpClient.get<any>(url)
  }
  addProduto(produto: Produto): Observable<any> {
    let url = `${this.urlBase}/add-produtos`;
    let body = produto;
    return this.httpClient.post(url, body)
  }
}
