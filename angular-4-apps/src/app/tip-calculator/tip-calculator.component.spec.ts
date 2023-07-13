import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalculatorComponent } from './tip-calculator.component';

describe('TipCalculatorComponent', () => {
  let component: TipCalculatorComponent;
  let fixture: ComponentFixture<TipCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipCalculatorComponent]
    });
    fixture = TestBed.createComponent(TipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
