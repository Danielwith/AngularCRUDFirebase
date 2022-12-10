import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServices } from 'src/app/data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    /*
    new Persona('Daniel', 'Orosco'),
    new Persona('John', 'Ramirez'),
    new Persona('Karla', 'Lara'),*/
  ];

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  saludar = new EventEmitter<number>();

  constructor(
    private logginService: LoggingService,
    private dataService: DataServices
  ) {}

  obtenerPersonas(): Observable<any> {
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.logginService.enviarMensajeAConsola(
      'Agregamos esta persona:' + persona.nombre + ' ' + persona.apellido
    );
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(indice: number) {
    let persona: Persona = this.personas[indice];
    return persona;
  }

  modificarPersona(indice: number, persona: Persona) {
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(indice, persona);
  }

  eliminarPersona(indice: number) {
    this.personas.splice(indice, 1);
    this.dataService.eliminarPersona(indice);
    //Se vuelve a guardar el arreglo para regenerar los indices de la bd
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
