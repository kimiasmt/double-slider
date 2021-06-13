import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-slider-value',
  templateUrl: './show-slider-value.component.html',
  styleUrls: ['./show-slider-value.component.css']
})
export class ShowSliderValueComponent implements OnInit {
  @Input() minValue = 0;
  @Input() maxValue = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
