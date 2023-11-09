import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Token } from '../../model/token';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})

export class AuthenticateComponent implements OnInit {

  token!: string;
  tokenD!: Token;
  nombre!: string;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.auth.setToken(params['token']);
      if (this.auth.isTokenExpired()) {
        this.router.navigate(['login'])
      } else {

        const usu = this.auth.getUserId();
        this.auth.getCredencialesUser(usu).subscribe(
          cred => {
            console.log(cred);
            if (cred.user) {
              this.nombre = cred.user.completo;
              const stri = JSON.stringify(cred);
              const cryptOut = CryptoJS.AES.encrypt(stri, 'dgira').toString();
              this.auth.setJoken(cryptOut);
              this.verifySesion();
            } else {
              this.router.navigate(['login'])
            }
          },
          err => this.router.navigate(['login'])
        )
      }
    });
  }

  verifySesion() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['visor']);
    } else {
      this.auth.flushToken();
      this.router.navigate(['login']);
    }
  }



}
