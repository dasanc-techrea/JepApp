import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesProcesoComponent } from './partes-proceso.component';

describe('PartesProcesoComponent', () => {
  let component: PartesProcesoComponent;
  let fixture: ComponentFixture<PartesProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartesProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartesProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
