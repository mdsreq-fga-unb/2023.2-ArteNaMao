import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendasComponent } from './view-vendas.component';

describe('ViewVendasComponent', () => {
  let component: ViewVendasComponent;
  let fixture: ComponentFixture<ViewVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVendasComponent]
    });
    fixture = TestBed.createComponent(ViewVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
