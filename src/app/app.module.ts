import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DoubleSliderBarComponent } from './double-slider-bar/double-slider-bar.component';
import { ShowSliderValueComponent } from './show-slider-value/show-slider-value.component';

@NgModule({
  declarations: [
    AppComponent,
    DoubleSliderBarComponent,
    ShowSliderValueComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
