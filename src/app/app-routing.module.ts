import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticateComponent } from './auth/authenticate/authenticate.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { VisorComponent } from './visor/visor.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'authenticate/:token', component: AuthenticateComponent },
  { path: 'visor', component: VisorComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/visor', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
