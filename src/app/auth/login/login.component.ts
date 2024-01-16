import { Component } from '@angular/core';
import { Login } from 'src/app/model/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})
export class LoginComponent {

  loginInvalid!: boolean;
  form!: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  /* AQUI DEFINIMOS LA TEMATICA DE NUESTRA IMAGEN*/
  styleImage = 'nature';


  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
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
      
      //value.password = Md5.hashStr(value.password).toString();
      let login: Login = new Login(value.email, value.password);
      this.service.loginSINAT(login).subscribe(
        respuesta => {
          if (respuesta.mensaje == 'error') {
            console.log(respuesta);
            this.loginInvalid = true;
          } else {
            console.log(respuesta.token);
            let token = btoa(respuesta.token);
            this.auth.setToken(token);
            this.router.navigate([`/authenticate/${token}`]);
          }
        }
      );
    }
  }

}
