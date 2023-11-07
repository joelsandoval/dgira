import { Component } from '@angular/core';
import { Login } from 'src/app/model/login';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
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

  logi: Login = new Login('','','09/DL-0155/04/19',2);
  token!: string;
  loginInvalid!: boolean;
  form!: FormGroup;

    constructor(    
    private service: AuthService,
    private router: Router,  
    private formBuilder: FormBuilder  
  ) { }

     /* AQUI DEFINIMOS LA TEMATICA DE NUESTRA IMAGEN*/
  styleImage = 'rain';

  
  ngOnInit(): void {
    this.buildForm();
  }
  
  private buildForm(): any {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
        });
  }
  /* ESTA FUNCION ES ACTIVADA POR EL NGSTYLE */
  unsplashClass(): any {
    return {
      'min-height': '100%',
      /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
      /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
      background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }
  login(event: Event): any {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(`'%c'USER: ${value.email} - PASSWORD: ${value.password}`, 'background: #222; color: #bada55');
    }
  }  

  
  /* loginMIRA() {
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
  } */

}
