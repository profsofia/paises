import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { VerpaisService } from '../../services/verpais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;
  constructor(
    private activatedRoute: ActivatedRoute,
    private verPaisService: VerpaisService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
     .pipe(
      switchMap(
        ({id})=> this.verPaisService.getPaisByCode(id)
      ),
      tap(console.log)
     )
     .subscribe(pais => this.pais= pais);


    /*this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id);
        this.verPaisService.getPaisByCode(id)
          .subscribe(
            (pais)=>{
              console.log(pais);
            }

          )
      })
      */
  }

}
