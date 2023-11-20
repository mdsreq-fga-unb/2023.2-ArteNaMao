import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirclienteComponent } from './excluircliente.component';

describe('ExcluirclienteComponent', () => {
  let component: ExcluirclienteComponent;
  let fixture: ComponentFixture<ExcluirclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirclienteComponent]
    });
    fixture = TestBed.createComponent(ExcluirclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
