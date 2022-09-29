import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCartButtonComponent } from './header-cart-button.component';

describe('HeaderCartButtonComponent', () => {
  let component: HeaderCartButtonComponent;
  let fixture: ComponentFixture<HeaderCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
