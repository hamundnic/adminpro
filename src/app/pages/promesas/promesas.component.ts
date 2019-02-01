import { Component, OnInit } from '@angular/core';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {


this.constarTres().then(
    mensaje => console.log('Termino!', mensaje),

  ).catch(error => console.error('Error de la promesa', error) );

  }

  ngOnInit() {
  }
constarTres(): Promise<boolean>{
  return new Promise((resolve , reject) => {
    let contador  = 0;
    let intervalo = setInterval( () => {
      contador += 1;
      console.log(contador);
      if (contador === 3)
      {
        resolve(true);
        clearInterval(intervalo);
      }
    }, 1000);

  });

}
}
