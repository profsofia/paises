import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  termino : string ="";
  hayError: boolean =false;
  paises : Pais[] =[];
  constructor(private paisService: PaisService){}

  buscar(termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(paisesResponse=>{
        this.paises = paisesResponse;
      }, (err)=>{
        console.log(err);
        this.hayError=true;
        this.paises =[];
      })

  }
  sugerencias(termino : string){
   this.hayError = false;
   //TODO:
  }

}
