import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  termino : string ="hola";
  hayError: boolean =false;
  constructor(private paisService: PaisService){}

  buscar(){
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe(resp=>{
        console.log(resp);
      }, (err)=>{
        console.log(err);
        this.hayError=true;
      })

  }

}
