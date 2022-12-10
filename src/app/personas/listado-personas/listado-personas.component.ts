import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css'],
})
export class ListadoPersonasComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {}
  ngOnInit(): void {}

  isAutenticated() {
    return this.loginService.isAutenticated();
  }

  salir() {
    this.loginService.logOut();
  }
}
