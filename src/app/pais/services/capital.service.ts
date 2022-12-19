import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {
  private apiCapital : string = 'https://restcountries.com/v2/capital';

  constructor(private httpCapital : HttpClient) { }

  buscarCapital(termino : string): Observable<Pais[]>{
    const urlcapital = `${this.apiCapital}/${termino}`
    return this.httpCapital.get<Pais[]>(urlcapital);
  }
}
