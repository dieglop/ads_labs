import { Component, inject, OnInit } from '@angular/core';
import { PratoService } from '../../../services/prato/prato.service';
import { Router } from '@angular/router';
import { Prato } from '../../../models/prato';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-prato',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-prato.html',
  styleUrl: './cadastrar-prato.css'
})
export class CadastrarPrato{
  nome: string = '';
  preco: string = '';

  pratoService = inject(PratoService);

  constructor(private router: Router) {}

  cadastrarPrato(){
    this.pratoService.cadastrarPrato(this.nome, this.preco).subscribe({
      next: () => {
        this.router.navigate([''])
      },
      error: () => {
        console.log('Erro')
      }
    })
  }

}
