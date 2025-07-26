import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-cliente.html',
  styleUrl: './editar-cliente.css'
})
export class EditarCliente implements OnInit {

  cliente: Cliente | null = null

  nome: string = '';
  cpf: string = ''

  clienteService = inject(ClienteService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cliente = this.clienteService.getClienteSelecionado();
    this.nome = this.cliente!.nome;
    this.cpf = this.cliente!.cpf;
  }

  editarCliente(){
    this.clienteService
    .editarCliente(this.nome, this.cpf, this.cliente!.id)
    .subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {

      },
      complete: () => {
        console.log("Chamada completa");
      }
    })
  }

}
