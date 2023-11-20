import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  screenSize: number;
  iscomp = true;

  @HostListener('window:resize', [])


  ngOnInit() {
    const screenWidth = window.innerWidth;
    this.screenSize = screenWidth;
    if (this.screenSize >= 1035) {
      this.iscomp = true;
    } else {
      this.iscomp = false;
    }
  }
}
