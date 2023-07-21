import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipDialogComponent } from './tip-dialog.component';

describe('TipDialogComponent', () => {
  let component: TipDialogComponent;
  let fixture: ComponentFixture<TipDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipDialogComponent]
    });
    fixture = TestBed.createComponent(TipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
