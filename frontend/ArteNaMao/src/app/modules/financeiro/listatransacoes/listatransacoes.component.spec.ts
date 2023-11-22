import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatransacoesComponent } from './listatransacoes.component';

describe('ListatransacoesComponent', () => {
  let component: ListatransacoesComponent;
  let fixture: ComponentFixture<ListatransacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListatransacoesComponent]
    });
    fixture = TestBed.createComponent(ListatransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
