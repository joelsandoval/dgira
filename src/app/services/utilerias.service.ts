import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../components/messages/message.service';

import { environment } from '../../environments/environment';
import { SysAlertas } from '../model/sys-alertas';

@Injectable({
  providedIn: 'root'
})

export class UtileriasService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private tramiteUrl = environment.ApiConfig.rutaBase + 'utilerias/';
  private sinatUrl = environment.ApiConfig.rutaSinat + 'utilerias/';
  private miraUrl = environment.ApiConfig.rutaBase + 'turnos/';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  
  getSysAlertas(): Observable<SysAlertas[]> {
    const url3 = `${this.tramiteUrl}alertas-login/`;
    return this.http.get<SysAlertas[]>(url3)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<SysAlertas[]>('getTramites', [])));
  }

  updDiaSinat(bitacora: string, tramite: number): Observable<number> {
    const url = `${this.sinatUrl}actualiza-db/${bitacora},${tramite}`;
    return this.http.get<number>(url)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<number>('getTramites')));
  }

  migraFlujo(bitacora: string, tramite: number): Observable<string> {
    const url = `${this.sinatUrl}act-flujo/${bitacora},${tramite}`;
    return this.http.get<string>(url)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<string>('getTramites')));
  }

  updDiaMiraSolo(tramite: number): Observable<string> {
    const url = `${this.tramiteUrl}diamira/solo/${tramite}`;
    return this.http.get<string>(url)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<string>('getTramites')));
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  getIPAddress(): Observable<string> {
    return this.http.get<string>("http://api.ipify.org/?format=json")
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<string>('getTramites')));
  }

  getFechaFutura(fecha: String, dias: number): Observable<Date> {
    const url = `${this.tramiteUrl}fecha_futura/${fecha},${dias}`;
    return this.http.get<Date>(url)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<Date>('getTramites')));
  }

  getDiasHabiles(fechaIni: String, fechaFin: String): Observable<number> {
    const url = `${this.tramiteUrl}dias_habiles/${fechaIni},${fechaFin}`;
    return this.http.get<number>(url)
      .pipe(tap(_ => this.log('trámites recuperados')),
        catchError(this.handleError<number>('getTramites')));
  }

  sendConfirmacion(from: string, subject: string, movimiento: number): any {
    const url = `${this.tramiteUrl}email-prestamo/${from},${subject},${movimiento}`;
    console.log(url);
    return this.http.post(url, this.httpOptions)
      .pipe(tap(_ => console.log('Se mandó el mail')),
        catchError(this.handleError('No se pudo recuperar el expediente')));
  }

  listadoAnios(inicio: number, final: number): number[] {
    let regresa: number[] = [];
    if (final >= inicio) {
      for (let x = inicio; x <= final; x++) {
        regresa.push(x);
      }
    } else {
      for (let x = inicio; x > final; x--) {
        regresa.push(x);
      }
    }
    
    return regresa;
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TramiteService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
