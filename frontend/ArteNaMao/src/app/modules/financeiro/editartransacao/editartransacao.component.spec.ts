import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartransacaoComponent } from './editartransacao.component';

describe('EditartransacaoComponent', () => {
  let component: EditartransacaoComponent;
  let fixture: ComponentFixture<EditartransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditartransacaoComponent]
    });
    fixture = TestBed.createComponent(EditartransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
