import { Component, OnInit } from '@angular/core';
import { SolicitacaoServiceService } from '../service/solicitacao-service.service';
import { Solicitacao } from '../entidades/solicitacaoEntity';
import { ThrowStmt } from '@angular/compiler';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  constructor(private solicitacaoService:SolicitacaoServiceService, private produtosService: HomeServiceService) { }

  solicitar: Solicitacao;

  pedidosRecebidos: Solicitacao[];
  ngOnInit() {
    this.enviarPedido();
    this.solicitar = new Solicitacao();

  }

  enviarPedido(){
    if(!this.validarCampos()){
      this.solicitacaoService.solicitarProduto(this.solicitar)
      .subscribe(
        pedidos => this.adcPedido = pedidos,
        error => console.error(error))
        alert("Pedido Efetuado")
    }else{
      alert("Verifique Campos")
    }
    this.limparCampos();
  }


  adcPedido(pedidos: Solicitacao){
    this.pedidosRecebidos.push(pedidos);
    this.refreshPedido();
  }

  validarCampos(){
    return this.solicitar.nomeGest == '' ||
    this.solicitar.nomeResp == ''||
    this.solicitar.centroCusto == '' ||
    this.solicitar.codigoProjeto == ''||
    this.solicitar.qntProduto == null ||
    this.solicitar.genero == null ||
    this.solicitar.modelo == null ||
    this.solicitar.tamanho == null ||
    this.solicitar.observacao == ''
  }
  limparCampos(){
    return this.solicitar.nomeGest == '' ||
    this.solicitar.nomeResp == ''||
    this.solicitar.centroCusto == '' ||
    this.solicitar.codigoProjeto == ''||
    this.solicitar.qntProduto == null ||
    this.solicitar.genero == null ||
    this.solicitar.modelo == null ||
    this.solicitar.tamanho == null ||
    this.solicitar.observacao == ''
    this.refreshPedido();
  }

  refreshPedido(){
    this.produtosService.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.enviarPedido = todosProdutos[0],
      err => console.error(err));    
    
  }
}
