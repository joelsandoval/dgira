import { Component, OnInit } from '@angular/core';
import { SysAlertas } from '../../model/sys-alertas';
import { AuthService } from '../../auth/auth.service';
import { UtileriasService } from '../../services/utilerias.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  permisos!: string[];
  alertas: SysAlertas[] = [];
  constructor(
    private auth: AuthService,
    private service: UtileriasService
  ) { }

  ngOnInit() {
    this.permisos = this.auth.getPermisos();
    this.service.getSysAlertas().subscribe(
      alertas => this.alertas = alertas
    )
  }

}
