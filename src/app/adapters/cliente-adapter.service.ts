import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteAdapterService {
  urlBase = 'http://localhost:8000'
  constructor(
    private httpClient: HttpClient,
  ) { }

  getClientes(): Observable<Cliente>{
    let url = `${this.urlBase}/clientes`
    return this.httpClient.get(url)
  }
}
