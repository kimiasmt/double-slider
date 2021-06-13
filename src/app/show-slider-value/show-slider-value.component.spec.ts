import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSliderValueComponent } from './show-slider-value.component';

describe('ShowSliderValueComponent', () => {
  let component: ShowSliderValueComponent;
  let fixture: ComponentFixture<ShowSliderValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSliderValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSliderValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
