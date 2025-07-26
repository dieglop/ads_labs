import { Component, inject, OnInit } from '@angular/core';
import { PratoService } from '../../../services/prato/prato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prato } from '../../../models/prato';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-prato',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-prato.html',
  styleUrl: './editar-prato.css'
})
export class EditarPrato implements OnInit {

  nome: string = ''
  preco: string = ''

  pratoService = inject(PratoService);

  pratoSelecionado: Prato | null = null;

  constructor(private route: ActivatedRoute ,private router: Router){}

  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pratoSelecionado = this.pratoService.getPratoSelecionado();
    this.nome = this.pratoSelecionado!.nome;
    this.preco = this.pratoSelecionado!.preco;

  }

  editarPrato(){
    this.pratoService
    .editarPrato(this.nome, this.preco, this.pratoSelecionado!.id)
    .subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
  
      },
      complete: () => {
        console.log('Chamada completa');
      }
    });

    console.log(this.nome, this.preco, this.pratoSelecionado!.id);
  }
}
