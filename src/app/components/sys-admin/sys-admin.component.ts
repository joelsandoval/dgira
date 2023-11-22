import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sys-admin',
  templateUrl: './sys-admin.component.html',
  styleUrls: ['./sys-admin.component.css']
})
export class SysAdminComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  seve = true;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
