import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  
  // Variable para almacenar los datos del servicio REST
  data: any;
  errorMessage: any;
  idPersona: any;
  persona: any;
  showMessage: boolean;

  constructor(private http: HttpClient) {
    this.showMessage = false;
  }
  // constructor(private dataService: DataService) {}

  realizarAccion() {
    this.showMessage = false;
    console.log('La acción del botón fue ejecutada.');
    const url = 'https://ws-personas-persona-mock-desarrollo.apps.interopera.jep.gov.co/personas/personas/2'; // Reemplaza con la URL de tu servicio REST
    this.http.get<any[]>(url)
    .subscribe(
      (result) => {
        console.log("OK");
        this.data = result;
        this.showMessage = true;
      },
      (responseError) => {
        console.log("ERROR");
        this.errorMessage = responseError.error;
        this.idPersona = this.errorMessage.id;
        this.persona = this.errorMessage;
        this.showMessage = true;
      }
    )
  }

}
