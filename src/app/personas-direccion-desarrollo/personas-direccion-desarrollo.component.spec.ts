import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasDireccionDesarrolloComponent } from './personas-direccion-desarrollo.component';

describe('PersonasDireccionDesarrolloComponent', () => {
  let component: PersonasDireccionDesarrolloComponent;
  let fixture: ComponentFixture<PersonasDireccionDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasDireccionDesarrolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonasDireccionDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
