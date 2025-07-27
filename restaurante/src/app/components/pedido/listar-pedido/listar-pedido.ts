import { Component, inject } from '@angular/core';
import { Pedido } from '../../../models/pedido';
import { PedidoService } from '../../../services/pedido/pedido-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedido',
  imports: [],
  templateUrl: './listar-pedido.html',
  styleUrl: './listar-pedido.css'
})
export class ListarPedido {
  pedidos: Pedido[] = [];

  pedidoService = inject(PedidoService);

  pedidoSelecionado: Pedido | null = null

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.pedidoService.listarPedidos().subscribe({
        next: (value: any) => {
          this.pedidos = value['Pedidos'];
        }, 
        error: () => {
          console.log('Erro')
        },
        complete: () => {
          console.log('Completou  a chamada http');
        }
      });
    }

    cadastrarPedido(){
      this.router.navigate(['cadastrar-pedido']);
    }

    atualizarPedido(pedido: Pedido){
      this.pedidoService.setPedidoSelecionado(pedido);
      this.router.navigate(['/pedido', pedido.id]);
    }

    removerPedido(pedido: Pedido){
       this.pedidoService.removerPedido(pedido.id).subscribe({
      next: () => {
        const index = this.pedidos.indexOf(pedido);

        this.pedidos.splice(index, 1);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completou a chamada http');
      }
    });
    }
}
