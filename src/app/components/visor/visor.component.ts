import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ResponseDGIT } from '../../model/token';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {  
  iat!: number;
  vigente!: number;
  fechaExpira!: Date;
  token!: ResponseDGIT;
  tokenS!: string;
  jokenS!: string;

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { 
    
  }

  ngOnInit() {  
    this.vigente = this.auth.getExp();    
    this.iat = this.auth.getIat();
    this.token = this.auth.decode();
    this.tokenS = this.auth.getToken();
    this.jokenS = this.auth.getJoken();
  }

  goToUrl(destino: number): void {
    let a = this.document.createElement('a');
    a.target="_blank";
    a.href=`http://localhost:4202/mira-web/#/authenticate/${this.tokenS}`;
    a.click();
  }

  logout(): void {    
    this.auth.flushToken();
    this.router.navigate(['/login']);
  }

}
