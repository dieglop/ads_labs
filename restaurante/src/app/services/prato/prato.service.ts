import { Injectable } from '@angular/core';
import { Prato } from '../../models/prato';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PratoService {
  readonly API_URL = 'http://localhost:3000/api/prato'

  pratoSelecionado: Prato | null = null

  constructor (private httpClient: HttpClient){}

  getPratoSelecionado(){
    return this.pratoSelecionado;
  }

  setPratoSelecionado(prato: Prato){
    this.pratoSelecionado = prato;
  }

  cadastrarPrato(nome: string, preco: string){
    const body = {
      nome: nome,
      preco: preco
    };

    return this.httpClient.post(this.API_URL, body);
  }

  listarPrato(idPrato: number){
    return this.httpClient.get(this.API_URL + '/' + idPrato);
  }

  listarPratos(){
    return this.httpClient.get(this.API_URL);
  }

  editarPrato(nome: string, preco: string, idPrato: number){
    const body = {
      nome: nome,
      preco: preco,
    };

    return this.httpClient.put(this.API_URL + '/' + idPrato, body);
  }

  removerPrato(idPrato: number){
    return this.httpClient.delete(this.API_URL + '/' + idPrato);
  }

}
