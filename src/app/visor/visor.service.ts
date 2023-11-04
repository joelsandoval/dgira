import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';

import { EvalEntidad } from '../model/eval-entidad';
import { environment } from '../../environments/environment';
import { EvaluacionEstatus } from '../model/sinat/evaluacion-estatus';

@Injectable({
  providedIn: 'root'
})
export class VisorService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private tramiteUrl = `${environment.ApiConfig.rutaBase}tramite`;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    

}
