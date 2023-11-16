import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  seve = true;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
