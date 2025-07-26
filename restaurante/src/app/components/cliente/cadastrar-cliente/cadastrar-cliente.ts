import { Component, inject } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-cliente.html',
  styleUrl: './cadastrar-cliente.css'
})
export class CadastrarCliente {
  nome: string = '';
  cpf: string = '';

  clienteService = inject(ClienteService);

  constructor(private router: Router) {}

  cadastrarCliente(){
    this.clienteService.cadastrarCliente(this.nome, this.cpf).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        console.log('Erro')
      }
    })
  }
}
