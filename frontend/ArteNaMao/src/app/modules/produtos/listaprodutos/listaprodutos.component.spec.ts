import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprodutosComponent } from './listaprodutos.component';

describe('ListaprodutosComponent', () => {
  let component: ListaprodutosComponent;
  let fixture: ComponentFixture<ListaprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaprodutosComponent]
    });
    fixture = TestBed.createComponent(ListaprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
