import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
declare let $: any;
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static TITLE = 'Monitor de Impacto y Riesgo Ambiental';
  public autenticado!: boolean;

  constructor(
    public router: Router,
    private auth: AuthService
    ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
/*         gtag('config', 'G-6Y83QBDTWQ',
          {
            page_path: event.urlAfterRedirects
          }
          ); */
          this.autenticado = this.auth.isAuthenticated();
      }
    });
  }
}
