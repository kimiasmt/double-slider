import {AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-double-slider-bar',
  templateUrl: './double-slider-bar.component.html',
  styleUrls: ['./double-slider-bar.component.css']
})
export class DoubleSliderBarComponent implements  AfterViewInit ,OnInit{
  sliderOne;
  sliderTwo ;
  minGap ;
  sliderTrack;
  minRange = 0;
  maxRange = 100;


  constructor() {

  }

  ngAfterViewInit(): void {
    this.sliderOne = document.getElementById("slider-1");
    this.minRange = this.sliderOne.value;
    this.sliderTwo = document.getElementById("slider-2");
    this.maxRange = this.sliderTwo.value;
    this.minGap = 0;
    this.sliderTrack = document.querySelector(".slider-track");
    }


 slideOne(){
    if(parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap){
      this.sliderOne.value = parseInt(this.sliderTwo.value) - this.minGap;
    }
    this.minRange = this.sliderOne.value;
    this.fillColor();
  }
  slideTwo(){
    if(parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap){
      this.sliderTwo.value = parseInt(this.sliderOne.value) + this.minGap;
    }
    this.maxRange = this.sliderTwo.value;
    this.fillColor();
  }

  fillColor(){
   const percent1 = (this.minRange/ 100) * 100;
   const percent2 = (this.maxRange / 100) * 100;
   this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }

  ngOnInit(): void {
    window.onload = () => {
      this.slideOne();
      this.slideTwo();
    }
  }

}
