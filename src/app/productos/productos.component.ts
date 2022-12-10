import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  nombre: string = 'Leche';
  private precio: number = 19.9;

  getPrecio(): number {
    return this.precio;
  }
}
