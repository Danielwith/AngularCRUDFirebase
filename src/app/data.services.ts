// Establece comunicacion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './personas/listado-personas/persona.model';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://listado-personas-da648-default-rtdb.firebaseio.com/datos.json?auth=' +
        token
    );
  }

  // Guardar Personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listado-personas-da648-default-rtdb.firebaseio.com/datos.json?auth=' +
          token,
        personas
      )
      .subscribe({
        next: (response) => console.log('Resultado: ' + response),
        error: (error) => console.log('Error: ' + error),
      });
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-da648-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;

    this.httpClient.put(url, persona).subscribe({
      next: (response) => console.log('Resultado Modificar: ' + response),
      error: (error) => console.log('Error al modificar: ' + error),
    });
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url =
      'https://listado-personas-da648-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      token;

    this.httpClient.delete(url).subscribe({
      next: (response) => console.log('Resultado Modificar: ' + response),
      error: (error) => console.log('Error al modificar: ' + error),
    });
  }
}
