import { Component, OnInit } from '@angular/core';
import { Token } from '../model/token';
import { AuthService } from '../auth/auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { PermisosO } from '../model/credenciales';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})
export class TopBarComponent implements OnInit {
  
  token!: string;
  tokenD!: Token;
  permisos: string[] = [];
  user!: number;

  menu: PermisosO[] = [];
  menuOficios: PermisosO[] = [];
  menuOficios2: PermisosO[] = [];
  menuOficios3: PermisosO[] = [];

  busqueda: string = "";
  tramites: boolean = true;

  entidad: number = 9;
  area = '02000000';
  direccion!: number;
  bTramites: boolean = true;
  bOficios!: boolean;
  bDgiras!: boolean;

  cTramites: string = 'btn btn-outline-light';
  cOficios: string = 'btn btn-outline-secondary';
  cDgiras: string = 'btn btn-outline-secondary';
  place: string = 'Buscar trámites';

  inis!: string;
  oficiosP!: number;

  server = environment.ApiConfig.sinatApi + 'api-docs';

  constructor(
    private auth: AuthService,
    //private ofis: OficiosService,
    private router: Router,
  ) { }

  ngOnInit() {    
      this.user = this.auth.getUserId();      
      this.inis = this.auth.getSiglas();
      this.direccion = this.auth.getArea();
      this.permisos = this.auth.getPermisos();
      const permisosO = this.auth.getPermisosO();
      this.menu = permisosO.filter(x => x.proceso == 3);
      this.menuOficios2 = permisosO.filter(x => x.permiso == 'R006DGI');
      this.menuOficios = permisosO.filter(x => x.proceso == 7 && !x.futura);
      this.entidad = this.auth.getEntidad();
  }

  replaceSlash(e: string) {
    this.busqueda = e.trim().split('/').join('_');
  }

  cambiaBusqueda(tipo: number) {
    switch (tipo) {
      case 1:
        this.bTramites = true;
        this.bOficios = false;
        this.bDgiras = false;
        this.cTramites = 'btn btn-outline-light';
        this.cOficios = 'btn btn-outline-secondary';
        this.cDgiras = 'btn btn-outline-secondary';
        this.place = 'Buscar trámites';
        break;
      case 2:
        this.bTramites = false;
        this.bOficios = true;
        this.bDgiras = false;
        this.cTramites = 'btn btn-outline-secondary';
        this.cOficios = 'btn btn-outline-light';
        this.cDgiras = 'btn btn-outline-secondary';
        this.place = 'Buscar oficios';
        break;
      case 3:
        this.bTramites = false;
        this.bOficios = false;
        this.bDgiras = true; 
        this.cTramites = 'btn btn-outline-secondary';
        this.cOficios = 'btn btn-outline-secondary';
        this.cDgiras = 'btn btn-outline-light';
        this.place = 'Buscar DGIRAs';
        break;
    }

  }

  logout(): void {    
    this.auth.flushToken();
    this.router.navigate(['/login']);
  }

}
