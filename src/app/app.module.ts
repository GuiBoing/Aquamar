import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InfoProdutoComponent } from './info-produto/info-produto.component';
import { InfoPedidoComponent } from './info-pedido/info-pedido.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    CarrinhoComponent,
    CheckoutComponent,
    PedidosComponent,
    AjudaComponent,
    LoginComponent,
    CadastroComponent,
    InfoProdutoComponent,
    InfoPedidoComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
