import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarprodutoComponent } from './registrarproduto.component';

describe('RegistrarprodutoComponent', () => {
  let component: RegistrarprodutoComponent;
  let fixture: ComponentFixture<RegistrarprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarprodutoComponent]
    });
    fixture = TestBed.createComponent(RegistrarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
