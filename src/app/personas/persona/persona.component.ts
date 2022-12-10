import { Component, Input } from '@angular/core';
import { Persona } from '../listado-personas/persona.model';
import { PersonasService } from '../listado-personas/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  @Input() persona: Persona = new Persona('default', 'default');
  @Input() indice: number = 0;

  constructor(private personaService: PersonasService) {}

  emitirSaludo() {
    this.personaService.saludar.emit(this.indice);
  }
}
