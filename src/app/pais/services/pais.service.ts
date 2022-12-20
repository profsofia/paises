import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string ='https://restcountries.com/v2/name';
  get httpParams(){
    return new HttpParams().set(
      'fields', 'name,capital,flag,subregion,timezones'
    )
  }


  constructor(private httpPais : HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url =`${this.apiUrl}/${termino}`
    return this.httpPais.get<Pais[]>(url);
  }
  buscarporRegion(region: string): Observable<Pais[]>{
    const url =`https://restcountries.com/v2/region/${region}`
    return this.httpPais.get<Pais[]>(url, {params: this.httpParams});
  }

}
