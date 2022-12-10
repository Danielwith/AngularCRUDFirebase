import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../listado-personas/persona.model';
import { LoggingService } from '../listado-personas/LoggingService.service';
import { PersonasService } from '../listado-personas/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number = 0;
  //Local Reference
  //@ViewChild('nombreRef') nombreInput: ElementRef | undefined;
  //@ViewChild('apellidoRef') apellidoInput: ElementRef | undefined;
  //Query Parameters
  modoEdicion: number = 0;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    /*
    if (this.index) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
*/
    //Query Parameters // El + esta para parsear a entero
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  agregarPersona() {
    //apellidoInput: HTMLInputElement //nombreInput: HTMLInputElement,
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //Local Reference
    //this.nombreInput?.nativeElement.value,
    //this.apellidoInput?.nativeElement.value

    if (/*this.index*/ this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
