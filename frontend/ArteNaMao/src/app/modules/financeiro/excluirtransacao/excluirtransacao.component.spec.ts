import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirtransacaoComponent } from './excluirtransacao.component';

describe('ExcluirtransacaoComponent', () => {
  let component: ExcluirtransacaoComponent;
  let fixture: ComponentFixture<ExcluirtransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirtransacaoComponent]
    });
    fixture = TestBed.createComponent(ExcluirtransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
