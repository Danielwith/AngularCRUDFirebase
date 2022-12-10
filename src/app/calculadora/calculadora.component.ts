import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  val1: number = 0;
  val2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.val1 + this.val2;
  }
}
