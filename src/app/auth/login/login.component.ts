import { Component } from '@angular/core';
import { Login } from 'src/app/model/login';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})
export class LoginComponent  {
  form!: UntypedFormGroup;
  login: Login = new Login('','','09/DL-0155/04/19',2);
  token!: string;
  loginInvalid!: boolean;

  mensaje = {
    fecha: '2020-06-22',
    mensaje: '<p><strong>Aviso MIRA: </strong>Recuerda que a partir del 1 de julio de 2020, este será el único link para entrar al MIRA</p><a style="text-align: center" href="https://mia.semarnat.gob.mx:8443/mira-web">https://mia.semarnat.gob.mx:8443/mira-web</a>'
  }

  constructor(    
    private service: AuthService,
    private router: Router,    
  ) { }

  
  loginMIRA() {
    this.login.password = Md5.hashStr(this.login.password).toString(); 
    this.service.loginMIRA(this.login).subscribe(
      token => {
        if(token.error){          
          this.loginInvalid = true; 
        } else {       
          this.token = btoa(token.object.access_token);
          this.router.navigate(['/authenticate/' + this.token ]);
        }
      }
    );
  }

}
