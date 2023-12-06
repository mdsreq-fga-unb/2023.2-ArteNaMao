import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent {
  public prodAlerta : boolean;
  constructor(
    private bsModalRef: BsModalRef,
  ) {}

  Sair() {
    this.bsModalRef.hide();
  }
}
