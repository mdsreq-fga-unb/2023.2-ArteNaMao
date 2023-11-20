import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirprodutoComponent } from './excluirproduto.component';

describe('ExcluirprodutoComponent', () => {
  let component: ExcluirprodutoComponent;
  let fixture: ComponentFixture<ExcluirprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirprodutoComponent]
    });
    fixture = TestBed.createComponent(ExcluirprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
