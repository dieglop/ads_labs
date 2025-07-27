import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Injectable({ providedIn: 'root'})
export class ClienteService {
  readonly API_URL: string = 'http://localhost:3000/api/cliente'

  clienteSelecionado: Cliente | null = null

  constructor (private httpClient: HttpClient){}


  buscarCliente(idCliente: number){
      return this.httpClient.get(this.API_URL + '/' + idCliente);
  }

  listarClientes(){
    return this.httpClient.get(this.API_URL)
  }

  getClienteSelecionado(){
    return this.clienteSelecionado;
  }

  setClienteSelecionado(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  editarCliente(nome: string, cpf: string, id: number){
    const body = {
      nome: nome, 
      cpf: cpf
    };

    return this.httpClient.put(this.API_URL + '/' + id, body);
  }

  cadastrarCliente(nome: string, cpf: string){
    const body = {
      nome: nome,
      cpf: cpf
    };

    return this.httpClient.post(this.API_URL, body);
  }

  removerCliente(id: number){
    return this.httpClient.delete(this.API_URL + '/' + id);
  }

}
