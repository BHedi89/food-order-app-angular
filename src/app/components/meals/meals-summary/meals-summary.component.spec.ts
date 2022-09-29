import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsSummaryComponent } from './meals-summary.component';

describe('MealsSummaryComponent', () => {
  let component: MealsSummaryComponent;
  let fixture: ComponentFixture<MealsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
