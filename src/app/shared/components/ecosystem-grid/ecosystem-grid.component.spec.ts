import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemGridComponent } from './ecosystem-grid.component';

describe('EcosystemGridComponent', () => {
  let component: EcosystemGridComponent;
  let fixture: ComponentFixture<EcosystemGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcosystemGridComponent]
    });
    fixture = TestBed.createComponent(EcosystemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
