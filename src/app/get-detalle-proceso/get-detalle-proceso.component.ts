import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-detalle-proceso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-detalle-proceso.component.html',
  styleUrl: './get-detalle-proceso.component.css'
})
export class GetDetalleProcesoComponent {

  // Variable para almacenar los datos del servicio REST
  data: any;
  errorMessage: any;
  idPersona: any;
  proceso: any;
  showMessage: boolean;

  constructor(private http: HttpClient) {
    this.showMessage = false;
  }
  // constructor(private dataService: DataService) {}

  realizarAccion() {
    this.showMessage = false;
    console.log('La acción del botón fue ejecutada.');
    const url = 'https://ws-personas-detalleproceso-desarrollo.apps.interopera.jep.gov.co/personas/processos/test'; // Reemplaza con la URL de tu servicio REST
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
        this.proceso = this.errorMessage;
        this.showMessage = true;
      }
    )
  }

}
