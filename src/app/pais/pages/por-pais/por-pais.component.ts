import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Pais[] = [];
  porpais: string = "Por País";
  paisesSugeridos: Pais[] = [];
  mostrarSugerencia : boolean = false;
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencia =false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(paisesResponse => {
        this.paises = paisesResponse;
      }, (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      })

  }
  sugerencias(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencia= true
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
   )
  }
  buscarSugerido(termino: string){
     this.buscar(termino);
  }

}
