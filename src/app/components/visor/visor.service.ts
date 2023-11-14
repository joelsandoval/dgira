import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../messages/message.service';

import { environment } from '../../../environments/environment';

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
