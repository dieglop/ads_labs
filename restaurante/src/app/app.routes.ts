import { Routes } from '@angular/router';
import { ListarCliente } from './components/cliente/listar-cliente/listar-cliente';
import { ListarPrato } from './components/prato/listar-prato/listar-prato';
import { CadastrarPrato } from './components/prato/cadastrar-prato/cadastrar-prato';
import { CadastrarCliente } from './components/cliente/cadastrar-cliente/cadastrar-cliente';
import { EditarPrato } from './components/prato/editar-prato/editar-prato';
import { EditarCliente } from './components/cliente/editar-cliente/editar-cliente';
import { CadastrarPedido } from './components/pedido/cadastrar-pedido/cadastrar-pedido';
import { ListarPedido } from './components/pedido/listar-pedido/listar-pedido';

export const routes: Routes = [
    {path: '', component: ListarCliente},

    { path: 'cliente/cadastrar', component: CadastrarCliente},

    {path: 'cliente/:id', component: EditarCliente},

    { path: 'prato', component: ListarPrato},

    {path: 'prato/cadastrar', component: CadastrarPrato},

    { path: 'prato/:id', component: EditarPrato},

    {path: 'cadastrar-pedido/:id', component: CadastrarPedido},

    {path: 'cadastrar-pedido', component: CadastrarPedido},

    {path: 'listar-pedido', component: ListarPedido}


];
