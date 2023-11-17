import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProcesosPersonaComponent } from './get-procesos-persona.component';

describe('GetProcesosPersonaComponent', () => {
  let component: GetProcesosPersonaComponent;
  let fixture: ComponentFixture<GetProcesosPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProcesosPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetProcesosPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
