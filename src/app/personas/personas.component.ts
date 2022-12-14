import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './listado-personas/persona.model';
import { PersonasService } from './listado-personas/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*
    this.personas = this.personasService.personas;*/
    this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas);
    });
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
