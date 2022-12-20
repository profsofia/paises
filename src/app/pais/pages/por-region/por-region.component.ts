import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {
  regiones : string[] =  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva : string ='';
  paises: Pais[] = [];
  constructor(private paisService : PaisService){}
  activarRegion(region: string){
    this.regionActiva = region;
    // TODO: hacer el llamado al servicio
    this.paisService.buscarporRegion(region)
    .subscribe(paisesPorregion => this.paises = paisesPorregion)


  }


}
