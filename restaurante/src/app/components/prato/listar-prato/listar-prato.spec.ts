import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrato } from './listar-prato';

describe('ListarPrato', () => {
  let component: ListarPrato;
  let fixture: ComponentFixture<ListarPrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
