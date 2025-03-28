import { Component, signal } from '@angular/core';

import {
  ComboBoxComponent,
  comboBoxOption
} from "@beexy/ngx-inputs"

import {
  GridLayout2DComponent as GRID2D,
  ItemGridLayoutComponent as ItemGrid,
  HorizontalLayoutComponent,
  POLICY_POSITION as POLICY,
} from "@beexy/ngx-layouts"

const policyCBOptions: comboBoxOption[] = [
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
  selector: 'app-grid-layout-2d-page',
  imports: [ GRID2D, HorizontalLayoutComponent, ComboBoxComponent, ItemGrid ],
  templateUrl: './grid-layout-2d-page.component.html',
  styleUrl: './grid-layout-2d-page.component.css',
})
export default class GridLayout2dPageComponent { 

  POLICY = POLICY;

  policy = signal<POLICY>(POLICY.CENTER_CENTER);
  policy_second = signal<POLICY>(POLICY.CENTER_CENTER);
  policy_itemGrid = signal<POLICY>(POLICY.CENTER_CENTER);

  policyCBOptions = signal<comboBoxOption[]>(policyCBOptions);


  updatePolicy(newPolicy: string) {
    this.policy.set( str2Policy( newPolicy ) );
  }

  updatePolicySecond(newPolicy: string) {
    this.policy_second.set( str2Policy( newPolicy ) );
  }

  updatePolicyIndividualItem(newPolicy: string) {
    this.policy_itemGrid.set( str2Policy( newPolicy ) );
  }

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