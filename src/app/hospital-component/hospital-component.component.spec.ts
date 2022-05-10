import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponentComponent } from './hospital-component.component';

describe('HospitalComponentComponent', () => {
  let component: HospitalComponentComponent;
  let fixture: ComponentFixture<HospitalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
