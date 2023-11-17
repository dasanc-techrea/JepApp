import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasTelefonoDesarrolloComponent } from './personas-telefono-desarrollo.component';

describe('PersonasTelefonoDesarrolloComponent', () => {
  let component: PersonasTelefonoDesarrolloComponent;
  let fixture: ComponentFixture<PersonasTelefonoDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasTelefonoDesarrolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonasTelefonoDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
