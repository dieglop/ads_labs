import { Injectable } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  readonly API_URL = 'http://localhost:3000/api/pedido'

  pedidoSelecionado: Pedido | null = null

  constructor (private httpClient: HttpClient){}


}
