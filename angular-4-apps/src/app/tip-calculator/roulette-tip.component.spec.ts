import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteTipComponent } from './roulette-tip.component';

describe('RouletteTipComponent', () => {
  let component: RouletteTipComponent;
  let fixture: ComponentFixture<RouletteTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouletteTipComponent]
    });
    fixture = TestBed.createComponent(RouletteTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
