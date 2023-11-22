import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirvendaComponent } from './excluirvenda.component';

describe('ExcluirvendaComponent', () => {
  let component: ExcluirvendaComponent;
  let fixture: ComponentFixture<ExcluirvendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirvendaComponent]
    });
    fixture = TestBed.createComponent(ExcluirvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
