import { Injectable } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  readonly API_URL = 'http://localhost:3000/api/pedido'

  pedidoSelecionado: Pedido | null = null

  constructor (private httpClient: HttpClient){}

  getPedidoSelecionado(){
    return this.pedidoSelecionado;
  }

  setPedidoSelecionado(pedido: Pedido){
    this.pedidoSelecionado = pedido;
  }

  cadastrarPedido(clienteId: number, pratos: number[]){
    const body = {
      ClienteId: clienteId,
      pratos: pratos
    }

    return this.httpClient.post(this.API_URL, body);
  }


  listarPedidos(){
    return this.httpClient.get(this.API_URL);
  }

  buscarPedido(){
   
  }
  
  listarPorQuantidadeDePedidos(){
    
  }
  
  listarOsClientesComMaisPedidos(){
    
  }
  
  listarOsClientesPorGasto(){
      
  }
  
  atualizarPedido(){
    
  }
  
  removerPedido(id: number){
      return this.httpClient.delete(this.API_URL + '/' + id);
  }
  
}
