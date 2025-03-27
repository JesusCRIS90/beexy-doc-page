import { Component, signal } from '@angular/core';

import {
  POLICY_POSITION as HPOS,
  HorizontalLayoutComponent,
  CenterLayoutComponent
} from "@beexy/ngx-layouts"

@Component({
  selector: 'app-horizontal-layout-page',
  imports: [HorizontalLayoutComponent, CenterLayoutComponent],
  templateUrl: './horizontal-layout-page.component.html',
  styleUrl: './horizontal-layout-page.component.css',
})
export default class HorizontalLayoutPageComponent {

  selectedValue = signal<HPOS>(HPOS.TOP_LEFT);

  onValueChange(event: Event) {

    const target = event.target;

    if (!(target instanceof (HTMLSelectElement))) return;

    const value = target.value;

    if (typeof value === 'string') {
      this.selectedValue.set(str2VPOS(value));
    }
  }
}

function str2VPOS(input: string): HPOS {

  switch (input) {

    case 'top-left':
      return HPOS.TOP_LEFT;

    case 'top-center':
      return HPOS.TOP_CENTER;

    case 'top-right':
      return HPOS.TOP_RIGHT;

    case 'center-left':
      return HPOS.CENTER_LEFT;

    case 'center-center':
      return HPOS.CENTER_CENTER;

    case 'center-right':
      return HPOS.CENTER_RIGHT;

    case 'bottom-left':
      return HPOS.BOTTOM_LEFT;

    case 'bottom-center':
      return HPOS.BOTTOM_CENTER;

    case 'bottom-right':
      return HPOS.BOTTOM_RIGHT;


    default:
      return HPOS.INHERIT;
  }

}