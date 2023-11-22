import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosNuevoComponent } from './empleados-nuevo.component';

describe('EmpleadosNuevoComponent', () => {
  let component: EmpleadosNuevoComponent;
  let fixture: ComponentFixture<EmpleadosNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosNuevoComponent]
    });
    fixture = TestBed.createComponent(EmpleadosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
