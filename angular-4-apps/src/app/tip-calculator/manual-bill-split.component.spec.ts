import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualBillSplitComponent } from './manual-bill-split.component';

describe('ManualBillSplitComponent', () => {
  let component: ManualBillSplitComponent;
  let fixture: ComponentFixture<ManualBillSplitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualBillSplitComponent]
    });
    fixture = TestBed.createComponent(ManualBillSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
