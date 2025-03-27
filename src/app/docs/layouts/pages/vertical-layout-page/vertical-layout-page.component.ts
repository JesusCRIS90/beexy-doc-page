import { Component, signal } from '@angular/core';

import {
  VERTICAL_POLICY_POSITION as VPOS,
  VerticalLayoutComponent,
  CenterLayoutComponent
} from "@beexy/ngx-layouts"

@Component({
  selector: 'app-vertical-layout-page',
  imports: [VerticalLayoutComponent, CenterLayoutComponent],
  templateUrl: './vertical-layout-page.component.html',
  styleUrl: './vertical-layout-page.component.css',
})
export default class VerticalLayoutPageComponent {

  selectedValue = signal<VPOS>(VPOS.LEFT_LEFT);

  onValueChange(event: Event) {

    const target = event.target;

    if (!(target instanceof (HTMLSelectElement))) return;

    const value = target.value;

    if (typeof value === 'string') {
      this.selectedValue.set( str2VPOS( value ) );
    }

  }


}


function str2VPOS(input: string): VPOS {

  switch (input) {

    case 'left-left':
      return VPOS.LEFT_LEFT;

    case 'left-center':
      return VPOS.LEFT_CENTER;

    case 'left-right':
      return VPOS.LEFT_RIGHT;

    case 'center-left':
      return VPOS.CENTER_LEFT;

    case 'center-center':
      return VPOS.CENTER_CENTER;

    case 'center-right':
      return VPOS.CENTER_RIGHT;

    case 'right-left':
      return VPOS.RIGHT_LEFT;

    case 'right-center':
      return VPOS.RIGHT_CENTER;

    case 'right-right':
      return VPOS.RIGHT_RIGHT;


    default:
      return VPOS.CENTER_CENTER;
  }

}