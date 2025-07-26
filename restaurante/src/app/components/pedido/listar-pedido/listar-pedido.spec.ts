import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedido } from './listar-pedido';

describe('ListarPedido', () => {
  let component: ListarPedido;
  let fixture: ComponentFixture<ListarPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
