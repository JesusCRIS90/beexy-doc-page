import { Component, computed, signal } from '@angular/core';

import { NumericalSliderComponent } from "@beexy/ngx-inputs"

import { 
  CardLayoutComponent, 
  ResponsiveCardGridLayoutComponent, 
  HorizontalLayoutComponent,
  FixedWidthLayoutComponent,
  POLICY_POSITION as POLICY
 } from "@beexy/ngx-layouts"

@Component({
  selector: 'app-responsive-card-grid-layout-page',
  imports: [
    CardLayoutComponent,
    ResponsiveCardGridLayoutComponent,
    HorizontalLayoutComponent,
    FixedWidthLayoutComponent,
    NumericalSliderComponent
  ],
  templateUrl: './responsive-card-grid-layout-page.component.html',
  styleUrl: './responsive-card-grid-layout-page.component.css',
})
export default class ResponsiveCardGridLayoutPageComponent {

  POLICY = POLICY;

  innerWindowSize = signal<number>(1800);
  cardsAmount = signal<number>(1);
  
  cardsNumberArray = computed(() =>
    Array.from({ length: this.cardsAmount() }, (_, i) => i)
  );


  updateInnerWindowSize(newInnerWidth: number) {
    this.innerWindowSize.set( newInnerWidth );
    // console.log(this.cardWidth())
  }

  updateCardAmount(newAmount: number) {
    this.cardsAmount.set( newAmount );
  }

}
