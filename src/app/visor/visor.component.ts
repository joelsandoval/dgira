import { Component, OnInit } from '@angular/core';
import { Token } from '../model/token';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {  
  iat!: number;
  vigente!: number;
  fechaExpira!: Date;
  token!: Token

  constructor(
    private auth: AuthService
  ) { 
    
  }

  ngOnInit() {  
    this.vigente = this.auth.getExp();    
    this.iat = this.auth.getIat();
    this.token = this.auth.decode(); 
  }
}
