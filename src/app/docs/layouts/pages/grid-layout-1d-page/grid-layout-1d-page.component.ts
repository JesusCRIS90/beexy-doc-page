import { Component, signal } from '@angular/core';

import {
  ComboBoxComponent,
  comboBoxOption
} from "@beexy/ngx-inputs"

import {
  GridLayout1DComponent as GRID1D,
  HorizontalLayoutComponent,
  POLICY_POSITION as POLICY,
  POLICY_ORIENTATION as ORIENTATION,
} from "@beexy/ngx-layouts"

const orientationOptions: comboBoxOption[] = [
  {
    internalValue: 'vert',
    externalValue: 'VERTICAL'
  },
  {
    internalValue: 'hori',
    externalValue: 'HORIZONTAL'
  },
]

const anchorPointOptions: comboBoxOption[] = [
  {
    internalValue: 'top-left',
    externalValue: 'TOP LEFT'
  },
  {
    internalValue: 'top-center',
    externalValue: 'TOP CENTER'
  },
  {
    internalValue: 'top-right',
    externalValue: 'TOP RIGHT'
  },

  {
    internalValue: 'center-left',
    externalValue: 'CENTER LEFT'
  },
  {
    internalValue: 'center-center',
    externalValue: 'CENTER CENTER'
  },
  {
    internalValue: 'center-right',
    externalValue: 'CENTER RIGHT'
  },

  {
    internalValue: 'bottom-left',
    externalValue: 'BOTTOM LEFT'
  },
  {
    internalValue: 'bottom-center',
    externalValue: 'BOTTOM CENTER'
  },
  {
    internalValue: 'bottom-right',
    externalValue: 'BOTTOM RIGHT'
  }
]

@Component({
  selector: 'app-grid-layout-1d-page',
  imports: [ GRID1D, HorizontalLayoutComponent, ComboBoxComponent ],
  templateUrl: './grid-layout-1d-page.component.html',
  styleUrl: './grid-layout-1d-page.component.css',
})
export default class GridLayout1dPageComponent {

  POLICY = POLICY;

  orientation = signal<ORIENTATION>(ORIENTATION.HORIZONTAL);
  policy = signal<POLICY>(POLICY.CENTER_CENTER);

  orientationCBOptions = signal<comboBoxOption[]>(orientationOptions);
  policyCBOptions = signal<comboBoxOption[]>(anchorPointOptions);


  updatePolicy(newPolicy: string) {
    this.policy.set( str2Policy( newPolicy ) );
  }

  updateOrientation(newOrientation: string) {
    this.orientation.set( str2Orientation( newOrientation ) );
  }

}

function str2Orientation(input: string): ORIENTATION {

  let val: ORIENTATION = ORIENTATION.HORIZONTAL;

  switch (input) {

    case "vert":
      val = ORIENTATION.VERTICAL;
      break;

    case "hori":
      val = ORIENTATION.HORIZONTAL;
      break

    default:
      val = ORIENTATION.HORIZONTAL;
      break
  }
  return val;
}

function str2Policy(input: string): POLICY {

  let val: POLICY = POLICY.INHERIT;

  switch (input) {

    case "top-left":
      val = POLICY.TOP_LEFT;
      break;

    case "top-center":
      val = POLICY.TOP_CENTER;
      break;

    case "top-right":
      val = POLICY.TOP_RIGHT;
      break;

    case "center-left":
      val = POLICY.CENTER_LEFT;
      break;

    case "center-center":
      val = POLICY.CENTER_CENTER;
      break;

    case "center-right":
      val = POLICY.CENTER_RIGHT;
      break;

    case "bottom-left":
      val = POLICY.BOTTOM_LEFT;
      break;

    case "bottom-center":
      val = POLICY.BOTTOM_CENTER;
      break;

    case "bottom-right":
      val = POLICY.BOTTOM_RIGHT;
      break;


    default:
      val = POLICY.INHERIT;
      break
  }
  return val;
}