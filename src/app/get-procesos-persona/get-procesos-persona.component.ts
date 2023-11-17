import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-get-procesos-persona',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './get-procesos-persona.component.html',
  styleUrl: './get-procesos-persona.component.css'
})
export class GetProcesosPersonaComponent {
  items: any ; // Replace with your actual data
  pagedItems: any[] = [];
  pageSize: number = 10; // Number of items per page
  currentPage: number = 1; // Current page
  totalItems: number = 1;
  errorMessage: any;
  proceso: any;
  previousName: any;
  nextName: any;
  showMessage: boolean = false;


  constructor(private http: HttpClient) {
    this.showMessage = false;
  }
  // constructor(private dataService: DataService) {}

  realizarAccion() {
    this.showMessage = false;
    const url = 'https://ws-personas-procesospersona-desarrollo.apps.interopera.jep.gov.co/personas/pessoas/test/processos';
    this.http.get<any[]>(url)
    .subscribe(
      (result) => {
        console.log("OK");
      },
      (responseError) => {
        console.log("ERROR");
        this.errorMessage = responseError.error;
        this.proceso = this.errorMessage;
        this.showMessage = true;
        this.items = responseError.error;
        this.totalItems = this.items.data.length;
        this.updatePagedItems(this.items);
        this.pageSize=this.items.pagination.page_size;
        this.currentPage=this.items.pagination.current_page;
        this.totalItems=this.items.pagination.total_items
        this.previousName=this.items.pagination.previous.rel;
        this.nextName=this.items.pagination.next.rel;
      }
    )
  }

  updatePagedItems(objResponse:any) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedItems = this.items.data.slice(startIndex, endIndex);
  }
}
