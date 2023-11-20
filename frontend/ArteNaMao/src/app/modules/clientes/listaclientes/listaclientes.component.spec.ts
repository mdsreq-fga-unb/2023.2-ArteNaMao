import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaclientesComponent } from './listaclientes.component';

describe('ListaclientesComponent', () => {
  let component: ListaclientesComponent;
  let fixture: ComponentFixture<ListaclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaclientesComponent]
    });
    fixture = TestBed.createComponent(ListaclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
