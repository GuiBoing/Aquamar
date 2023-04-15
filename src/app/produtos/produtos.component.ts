import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoAdapterService } from '../adapters/produto-adapter.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(
    private produtoService: ProdutoAdapterService
  ) { }
  produtos: Array<Produto>;
  ngOnInit() {
    this.loadProdutosList()
  }

  loadProdutosList() {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response.content;
      console.log(response);
    },
      (error) => {
        console.log(error);
      }
    );


  }

}
