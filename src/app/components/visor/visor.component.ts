import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ResponseDGIT } from '../../model/token';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {  
  iat!: number;
  vigente!: number;
  fechaExpira!: Date;
  token!: ResponseDGIT


  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) { 
    
  }

  ngOnInit() {  
    this.vigente = this.auth.getExp();    
    this.iat = this.auth.getIat();
    this.token = this.auth.decode(); 
    console.log(this.token);
  }

  goToUrl(): void {
    let a = this.document.createElement('a');
    a.target="_blank";
    a.href='http://localhost:4201/mira-web/#/tramites-mod/2/1/-/evaluacion-ev/0/0';
    a.click();
  }

}
