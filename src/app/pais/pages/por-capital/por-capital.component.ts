import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino : string ="";
  hayError: boolean =false;
  capitales : Pais[] =[];
  porcapital : string ="Por Capital";
  constructor(private capitalService: CapitalService){}

  buscar(termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(this.termino)
      .subscribe(capitalsResponse=>{
        this.capitales = capitalsResponse;
      }, (err)=>{
        console.log(err);
        this.hayError=true;
        this.capitales =[];
      })

  }
  sugerencias(termino : string){
   this.hayError = false;
   //TODO:
  }
}
