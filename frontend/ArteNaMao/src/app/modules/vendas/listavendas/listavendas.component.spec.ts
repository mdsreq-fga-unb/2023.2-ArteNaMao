import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListavendasComponent } from './listavendas.component';

describe('ListavendasComponent', () => {
  let component: ListavendasComponent;
  let fixture: ComponentFixture<ListavendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListavendasComponent]
    });
    fixture = TestBed.createComponent(ListavendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
