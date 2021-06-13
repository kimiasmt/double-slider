import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSliderBarComponent } from './double-slider-bar.component';

describe('DoubleSliderBarComponent', () => {
  let component: DoubleSliderBarComponent;
  let fixture: ComponentFixture<DoubleSliderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleSliderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSliderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
