import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MessageService } from "src/app/messages/message.service";
import { Puestos, RhPuestosTipo, Adscripcion, AdscripcionVw, AreasDgira, Subdir, Empleado, RhPersonas, Nombramiento } from "../model/puestos";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private empleadoUrl = environment.ApiConfig.rutaAdmin + 'personas/';
  private areaUrl = environment.ApiConfig.rutaAdmin + 'areas/';
  private nombraUrl = environment.ApiConfig.rutaAdmin + 'nombra/';
  private puestoUrl = environment.ApiConfig.rutaAdmin + 'puestos/';
  private adscripcionUrl = environment.ApiConfig.rutaAdmin + 'adscripcion/';
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };



  getLista(): Observable<Empleado[]> {
    const url = `${this.empleadoUrl}lista`;
    return this.http.get<Empleado[]>(url)
  }

  getPersona(id: number): Observable<RhPersonas> {
    const url = `${this.empleadoUrl}id/${id}`;
    return this.http.get<RhPersonas>(url)
  }

  getAreas(): Observable<AreasDgira[]> {
    const url = `${this.areaUrl}listarea`;
    return this.http.get<AreasDgira[]>(url)

  }

  getAdscripciones(): Observable<AdscripcionVw[]> {
    const url = `${this.adscripcionUrl}lista`;
    return this.http.get<AdscripcionVw[]>(url)

  }

  getSubdir(): Observable<Subdir[]> {
    const url = `${this.areaUrl}listasub`;
    return this.http.get<Subdir[]>(url)

  }

  getSubId(id: number): Observable<Subdir[]> {
    const url = `${this.areaUrl}id/${id}`;
    return this.http.get<Subdir[]>(url)

  }

  getDir(): Observable<AreasDgira[]> {
    const url = `${this.areaUrl}listdir`;
    return this.http.get<AreasDgira[]>(url)

  }

  getNombra(): Observable<Nombramiento[]> {
    const url = `${this.nombraUrl}listanombra`;
    return this.http.get<Nombramiento[]>(url)

  }

  getPuestoLista(): Observable<Puestos[]> {
    const url = `${this.puestoUrl}lista`;
    return this.http.get<Puestos[]>(url)
  }

  getPuesto(id: number): Observable<RhPuestosTipo> {
    const url = `${this.puestoUrl}id/${id}`;
    return this.http.get<RhPuestosTipo>(url)
  }

  /** POST: guarda una persona */
  savePersona(persona: RhPersonas): Observable<any> {
    
    return this.http.post(this.empleadoUrl, persona, this.httpOptions).pipe(
      tap(_ => this.log(`Se creo la persona=${persona.nombre} con el id=${persona.id}`)),
      catchError(this.handleError<any>('fallo en el guardado'))
    );
  }

  /** POST: guarda una nombramiento */
  saveNombramiento(nombramiento: Nombramiento): Observable<Nombramiento> {
    
    return this.http.post<Nombramiento>(this.nombraUrl, nombramiento, this.httpOptions).pipe(
      tap(_ => this.log(`Se creo el nombramiento=${nombramiento.nombramiento} con el id=${nombramiento.id}`)),
      catchError(this.handleError<Nombramiento>('fallo en el guardado'))
    );
  }

  /** POST: guarda un puesto */
  savePuesto(puesto: RhPuestosTipo): Observable<RhPuestosTipo>{

    return this.http.post<RhPuestosTipo>(this.puestoUrl, puesto, this.httpOptions).pipe(
      tap(_ => this.log(`Se creo el puesto=${puesto.nombrePuesto} con el id=${puesto.id}`)),
      catchError(this.handleError<any>('fallo en el guardado'))
    );
  }

  /** POST: guarda una nueva area */
  saveDirecciones(dire: AreasDgira): Observable<AreasDgira> {
    
    return this.http.post<AreasDgira>(this.areaUrl, dire, this.httpOptions).pipe(
      tap(_ => this.log(`Se creo la Direccion=${dire.nombreDir} con el id=${dire.id}`)),
      catchError(this.handleError<any>('fallo en el guardado'))
    );
  }

  /** POST: guarda unanueva adscripcion */
   saveAdscripcion(adscripcion: Adscripcion): Observable<Adscripcion> {
   return this.http.post<Adscripcion>(this.adscripcionUrl, adscripcion, this.httpOptions).pipe(
     tap(_ => this.log(`Se creo la Direccion=${adscripcion.puesto} con el id=${adscripcion.id}`)),
     catchError(this.handleError<any>('fallo en el guardado'))
   );
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