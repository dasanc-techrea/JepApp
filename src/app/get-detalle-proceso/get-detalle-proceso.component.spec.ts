import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetalleProcesoComponent } from './get-detalle-proceso.component';

describe('GetDetalleProcesoComponent', () => {
  let component: GetDetalleProcesoComponent;
  let fixture: ComponentFixture<GetDetalleProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDetalleProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDetalleProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
