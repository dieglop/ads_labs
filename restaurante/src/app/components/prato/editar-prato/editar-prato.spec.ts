import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPrato } from './editar-prato';

describe('EditarPrato', () => {
  let component: EditarPrato;
  let fixture: ComponentFixture<EditarPrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
