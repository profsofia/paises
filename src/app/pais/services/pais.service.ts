import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string ='https://restcountries.com/v2/name';

  constructor(private httpPais : HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url =`${this.apiUrl}/${termino}`
    return this.httpPais.get<Pais[]>(url);
  }
}
