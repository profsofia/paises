import { Component, EventEmitter, Output , OnInit} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  // Rebote
  @Output() onDebouncer : EventEmitter<string> = new EventEmitter();

  debouncer : Subject<string> = new Subject();
  termino : string ='';
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebouncer.emit(valor);
      console.log('Debouncer:', valor);
    })

  }
  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
   this.debouncer.next(this.termino);
  }

}
