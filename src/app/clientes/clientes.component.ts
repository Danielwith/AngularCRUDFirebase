import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  //styleUrls: ['./clientes.component.css'],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class ClientesComponent {
  deshabilitar = false;
  mensaje = '';
  titulo = '';
  mostrar = false;

  presion = 0;
  exploMsg = 'Hey! :)';

  agregarProducto() {
    this.mostrar = true;
    this.mensaje = 'Producto agregado';
  }

  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  explotar() {
    this.exploMsg = 'Mmm.. podrias..';
    this.presion++;
    if (this.presion > 3) {
      this.exploMsg = 'DETENERTE';
    }
  }
}
