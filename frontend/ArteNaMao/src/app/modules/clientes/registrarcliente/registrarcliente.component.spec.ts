import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarclienteComponent } from './registrarcliente.component';

describe('RegistrarclienteComponent', () => {
  let component: RegistrarclienteComponent;
  let fixture: ComponentFixture<RegistrarclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarclienteComponent]
    });
    fixture = TestBed.createComponent(RegistrarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
