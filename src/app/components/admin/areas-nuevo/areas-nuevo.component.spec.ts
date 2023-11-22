import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasNuevoComponent } from './areas-nuevo.component';

describe('AreasNuevoComponent', () => {
  let component: AreasNuevoComponent;
  let fixture: ComponentFixture<AreasNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasNuevoComponent]
    });
    fixture = TestBed.createComponent(AreasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
