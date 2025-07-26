import { Component, inject, OnInit } from '@angular/core';
import { Prato } from '../../../models/prato';
import { Router } from '@angular/router';
import { PratoService } from '../../../services/prato/prato.service';

@Component({
  selector: 'app-listar-prato',
  imports: [],
  templateUrl: './listar-prato.html',
  styleUrl: './listar-prato.css'
})
export class ListarPrato implements OnInit {
  pratos: Prato[] = []

  pratoService = inject(PratoService);

  constructor(private router: Router){}

  ngOnInit(): void {
    this.pratoService.listarPratos().subscribe({
      next: (value: any) => {
        this.pratos = value['Pratos'];
      },
      error: () => {
        console.log('Erro');
      },
      complete() {
        console.log('Completou a chamada http');
      },
    });
  }

  buscarPrato(){

  }

  atualizarPrato(prato: Prato){
    this.pratoService.setPratoSelecionado(prato);
    this.router.navigate(['/prato', prato.id]);
  }

  cadastrarPrato(){
    this.router.navigate(['/prato/cadastrar']);
  }

  removerPrato(prato: Prato){
    this.pratoService.removerPrato(prato.id).subscribe({
      next: () => {
        const index = this.pratos.indexOf(prato);

        this.pratos.splice(index, 1);
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
