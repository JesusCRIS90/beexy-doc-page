import { Component, signal } from '@angular/core';

import { FixedWidthLayoutComponent } from "@beexy/ngx-layouts"
import { NumericalSliderComponent } from "@beexy/ngx-inputs"

@Component({
  selector: 'app-fixed-width-layout-page',
  imports: [
    FixedWidthLayoutComponent,
    NumericalSliderComponent,
  ],
  templateUrl: './fixed-width-layout-page.component.html',
  styleUrl: './fixed-width-layout-page.component.css',
})
export default class FixedWidthLayoutPageComponent {


  fixedWidthSliderValue = signal<number>( 500 );


  updateFixWidth( newValue: number ){
    this.fixedWidthSliderValue.set( newValue );
  }

}
