import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPersonasComponent } from './get-personas.component';

describe('GetPersonasComponent', () => {
  let component: GetPersonasComponent;
  let fixture: ComponentFixture<GetPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
