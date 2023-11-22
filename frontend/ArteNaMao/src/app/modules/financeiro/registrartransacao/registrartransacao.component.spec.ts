import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrartransacaoComponent } from './registrartransacao.component';

describe('RegistrartransacaoComponent', () => {
  let component: RegistrartransacaoComponent;
  let fixture: ComponentFixture<RegistrartransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrartransacaoComponent]
    });
    fixture = TestBed.createComponent(RegistrartransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
