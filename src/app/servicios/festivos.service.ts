import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FestivoDto } from '../entidades/festivodto';

@Injectable({
  providedIn: 'root',
})
export class FestivosService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}festivos`;
  }
  public listar(ano: number): Observable<FestivoDto[]> {
    let urlT = `${this.url}/obtener/${ano}`;
    return this.http.get<FestivoDto[]>(urlT);
  }

  public verificar(dia: number, mes: number, ano: number): Observable<any> {
    let urlT = `${this.url}/verificar/${ano}/${mes}/${dia}`;
    return this.http.get(urlT, { responseType: 'text' });
  }
}
