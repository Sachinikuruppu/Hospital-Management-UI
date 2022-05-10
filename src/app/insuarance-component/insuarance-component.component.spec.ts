import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuaranceComponentComponent } from './insuarance-component.component';



describe('InsuaranceComponentComponent', () => {
  let component: InsuaranceComponentComponent;
  let fixture: ComponentFixture<InsuaranceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuaranceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuaranceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
