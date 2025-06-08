import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDomoticaComponent } from './detalle-domotica.component';

describe('DetalleDomoticaComponent', () => {
  let component: DetalleDomoticaComponent;
  let fixture: ComponentFixture<DetalleDomoticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDomoticaComponent]
    });
    fixture = TestBed.createComponent(DetalleDomoticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
