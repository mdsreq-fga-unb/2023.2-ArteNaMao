import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarvendaComponent } from './registrarvenda.component';

describe('RegistrarvendaComponent', () => {
  let component: RegistrarvendaComponent;
  let fixture: ComponentFixture<RegistrarvendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarvendaComponent]
    });
    fixture = TestBed.createComponent(RegistrarvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
