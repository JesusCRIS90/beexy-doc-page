import { Component, signal } from '@angular/core';

import {
  NumericalSliderComponent,
  ComboBoxComponent,
  comboBoxOption
} from "@beexy/ngx-inputs"
import {
  RelativeLayoutComponent,
  FloatingLayoutComponent,
  HorizontalLayoutComponent,
  FLEX_ORIENTATION,
  POLICY_POSITION as POLICY,
  POLICY_POSITION as AnchorPoint
} from "@beexy/ngx-layouts"

interface Position {
  xpos: number,
  ypos: number,
}

const orientationOptions: comboBoxOption[] = [
  {
    internalValue: 'row',
    externalValue: 'ROW'
  },
  {
    internalValue: 'column',
    externalValue: 'COL'
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
  selector: 'app-floating-layout-page',
  imports: [
    RelativeLayoutComponent,
    FloatingLayoutComponent,
    HorizontalLayoutComponent,
    NumericalSliderComponent,
    ComboBoxComponent
  ],
  templateUrl: './floating-layout-page.component.html',
  styleUrl: './floating-layout-page.component.css',
})
export default class FloatingLayoutPageComponent {

  POLICY = POLICY;

  position = signal<Position>({ xpos: 0, ypos: 0 });
  orientation = signal<FLEX_ORIENTATION>(FLEX_ORIENTATION.COLUMN);
  anchorPoint = signal<AnchorPoint>(AnchorPoint.CENTER_CENTER);

  orientationCBOptions = signal<comboBoxOption[]>(orientationOptions);
  anchorPointCBOptions = signal<comboBoxOption[]>(anchorPointOptions);


  updateXpos(newXpos: number) {
    this.position.update(({ ypos }) => { return { xpos: newXpos, ypos } })
  }

  updateYpos(newYpos: number) {
    this.position.update(({ xpos }) => { return { xpos, ypos: newYpos } })
  }

  updateOrientation(newVal: string) {
    this.orientation.set( str2Orientation( newVal ) );
    console.log('Orientation:', newVal);
  }

  updateAnchorPoint(newVal: string) {
    this.anchorPoint.set( str2AnchorPoint( newVal ) );
    console.log('Anchor Point:', newVal);
  }
}


function str2Orientation(input: string): FLEX_ORIENTATION {

  let val: FLEX_ORIENTATION = FLEX_ORIENTATION.ROW;

  switch (input) {

    case "row":
      val = FLEX_ORIENTATION.ROW;
      break;

    case "column":
      val = FLEX_ORIENTATION.COLUMN;
      break

    default:
      val = FLEX_ORIENTATION.ROW;
      break
  }
  return val;
}

function str2AnchorPoint(input: string): AnchorPoint {

  let val: AnchorPoint = AnchorPoint.INHERIT;

  switch (input) {

    case "top-left":
      val = AnchorPoint.TOP_LEFT;
      break;

    case "top-center":
      val = AnchorPoint.TOP_CENTER;
      break;

    case "top-right":
      val = AnchorPoint.TOP_RIGHT;
      break;

    case "center-left":
      val = AnchorPoint.CENTER_LEFT;
      break;

    case "center-center":
      val = AnchorPoint.CENTER_CENTER;
      break;

    case "center-right":
      val = AnchorPoint.CENTER_RIGHT;
      break;

    case "bottom-left":
      val = AnchorPoint.BOTTOM_LEFT;
      break;

    case "bottom-center":
      val = AnchorPoint.BOTTOM_CENTER;
      break;

    case "bottom-right":
      val = AnchorPoint.BOTTOM_RIGHT;
      break;


    default:
      val = AnchorPoint.INHERIT;
      break
  }
  return val;
}