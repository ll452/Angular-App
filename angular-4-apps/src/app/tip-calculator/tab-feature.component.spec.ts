import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFeatureComponent } from './tab-feature.component';

describe('TabFeatureComponent', () => {
  let component: TabFeatureComponent;
  let fixture: ComponentFixture<TabFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabFeatureComponent]
    });
    fixture = TestBed.createComponent(TabFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
