import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry,map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit,OnDestroy {
subcription:Subscription;
  constructor() {

/*this.regresaObservable().pipe(
  retry(2)
)*/
this.subcription = this.regresaObservable().subscribe(
  numero=>console.log(numero),
  error=>console.error('Error en el Obj', error),
  ()=>console.log('el observacion termino!')


);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
console.log('la pagina se va a cerrar');
  }
regresaObservable():Observable<any>{
  return  new Observable((observer:Subscriber<any>) => {
    let contador = 0;
    let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        }

      observer.next(salida);

     /* if(contador===3)
      {
        clearInterval(intervalo);
        observer.complete();
      }
      if(contador===2)
      {
         //clearInterval(intervalo);
        observer.error('Auxilio!');
      }*/
    }, 1000 );

  }).pipe(map(res => res.valor),
  filter((valor, index) => {
    if ((valor % 2) === 1) {
      // impar
      return true;
    } else {
      // par
      return false;
    }
  })
  );
}
}
