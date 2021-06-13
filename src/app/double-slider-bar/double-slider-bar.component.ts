import {AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-double-slider-bar',
  templateUrl: './double-slider-bar.component.html',
  styleUrls: ['./double-slider-bar.component.css']
})
export class DoubleSliderBarComponent implements  AfterViewInit ,OnInit{
  minGap = 0;
  sliderTrack;
  slider1 = new FormControl(30);
  slider2 = new FormControl(80);

  constructor() {
  }

  ngAfterViewInit(): void {
    this.sliderTrack = document.querySelector(".slider-track");
    }

 slideOne(){
    if(this.slider2.value - this.slider1.value <= this.minGap){
      this.slider1.setValue(this.slider2.value - this.minGap);
    }
    this.fillColor();
  }
  slideTwo(){
    if(this.slider2.value - this.slider1.value <= this.minGap){
      this.slider2.setValue(this.slider1.value + this.minGap);
    }
    this.fillColor();
  }

  fillColor(){
   const percent1 = (this.slider1.value/ 100) * 100;
   const percent2 = (this.slider2.value / 100) * 100;
   this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  ngOnInit(): void {
    window.onload = () => {
      this.slideOne();
      this.slideTwo();
    }
  }

}
