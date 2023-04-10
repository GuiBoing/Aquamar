import { Component, OnInit } from '@angular/core';
import { ClienteAdapterService } from '../adapters/cliente-adapter.service';
import { ProdutoAdapterService } from '../adapters/produto-adapter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private clienteService:ClienteAdapterService,
    private produtoService:ProdutoAdapterService
  ) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(data=>console.log(data))
    this.produtoService.getProdutos().subscribe(data=>console.log(data))
  }

}
