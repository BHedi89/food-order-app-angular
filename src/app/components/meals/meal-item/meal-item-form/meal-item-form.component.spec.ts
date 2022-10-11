import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealItemFormComponent } from './meal-item-form.component';

describe('MealItemFormComponent', () => {
  let component: MealItemFormComponent;
  let fixture: ComponentFixture<MealItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
