import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class VerpaisService {
  private apiUrl: string = 'https://restcountries.com/v2/alpha';

  constructor(private httpPais: HttpClient) { }

  getPaisByCode(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/${id}`
    return this.httpPais.get<Pais>(url);
  }

}
