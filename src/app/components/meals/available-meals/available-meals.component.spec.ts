import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMealsComponent } from './available-meals.component';

describe('AvailableMealsComponent', () => {
  let component: AvailableMealsComponent;
  let fixture: ComponentFixture<AvailableMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
