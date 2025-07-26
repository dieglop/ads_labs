import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-cliente',
  imports: [],
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css'
})
export class ListarCliente implements OnInit{
   clientes: Cliente[] = []

   clienteService = inject(ClienteService);

   //clienteSelecionado: Cliente | null = null

   constructor(private router: Router) {}

    ngOnInit(): void {
      this.clienteService.listarClientes().subscribe({
        next: (value: any) => {
          this.clientes = value['Clientes'];
        }, 
        error: () => {
          console.log('Erro')
        },
        complete: () => {
          console.log('Completou  a chamada http');
        }
      });
    }

    atualizarCliente(cliente: Cliente){
      this.clienteService.setClienteSelecionado(cliente);
      this.router.navigate(['/cliente', cliente.id]);
    }

    cadastrarCliente(){
      this.router.navigate(['/cliente/cadastrar']);
    }

    removerCliente(cliente: Cliente){
      this.clienteService.removerCliente(cliente.id).subscribe({

        next: () =>  {
          const index = this.clientes.indexOf(cliente);
          this.clientes.splice(index, 1);
        },
        error: (error: any) => {
        console.log(error);
        },
        complete: () => {
          console.log('Completou a chamada http');
        }
      })

    }

}




   
