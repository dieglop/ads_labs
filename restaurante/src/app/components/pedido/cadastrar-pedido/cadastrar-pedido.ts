import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';
import { Prato } from '../../../models/prato';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { PratoService } from '../../../services/prato/prato.service';
import { PedidoService } from '../../../services/pedido/pedido-service';

@Component({
  selector: 'app-cadastrar-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-pedido.html',
  styleUrl: './cadastrar-pedido.css'
})
export class CadastrarPedido {
  cliente: Cliente | null = null
  
  pratosDisponiveis: Prato[] = [];
  pratosSelecionados: Prato[] = [];

  private clienteService = inject(ClienteService);
  private pratoService = inject(PratoService);
  private pedidoService = inject(PedidoService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cliente = this.clienteService.getClienteSelecionado();
    
    // Busca todos os pratos disponíveis
    this.pratoService.listarPratos().subscribe({
      next: (value: any) => {
        this.pratosDisponiveis = value['Pratos'];
      },
      error: () => {
        console.log('Erro');
      },
      complete() {
        console.log('Completou a chamada http');
      },
    });

  }

  adicionarPrato(prato: Prato) {
    this.pratosSelecionados.push(prato);
  }
  
  removerPrato(index: number) {
    this.pratosSelecionados.splice(index, 1);
  }

  cadastrarPedido() {
    if (this.cliente!.id && this.pratosSelecionados.length > 0) {
      const pratosIds = this.pratosSelecionados.map(p => p.id);
      
      this.pedidoService.cadastrarPedido( this.cliente!.id, pratosIds ).subscribe({
        next: () => {
          this.router.navigate(['']); 
        },
        error: (err) => {
          console.error('Erro ao cadastrar pedido:', err);
        }
      });
    }
  }
}



