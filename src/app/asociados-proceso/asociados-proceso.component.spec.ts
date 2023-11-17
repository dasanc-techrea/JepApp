import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociadosProcesoComponent } from './asociados-proceso.component';

describe('AsociadosProcesoComponent', () => {
  let component: AsociadosProcesoComponent;
  let fixture: ComponentFixture<AsociadosProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociadosProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsociadosProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
