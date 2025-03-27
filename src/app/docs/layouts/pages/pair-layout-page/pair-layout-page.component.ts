import { Component, signal } from '@angular/core';

import {
  ComboBoxComponent,
  comboBoxOption
} from "@beexy/ngx-inputs"
import {
  PairLayoutComponent,
  HorizontalLayoutComponent,
  PAIR_DISTRIBUTION,
  POLICY_POSITION as POLICY,
} from "@beexy/ngx-layouts"

const pairDistributionOptions: comboBoxOption[] = [
  {
    internalValue: 'oppoite',
    externalValue: 'OPPOSITE'
  },
  {
    internalValue: 'center',
    externalValue: 'CENTER'
  },
  {
    internalValue: 'glued',
    externalValue: 'GLUED'
  },
]

@Component({
  selector: 'app-pair-layout-page',
  imports: [
    PairLayoutComponent,
    HorizontalLayoutComponent,
    ComboBoxComponent
  ],
  templateUrl: './pair-layout-page.component.html',
  styleUrl: './pair-layout-page.component.css',
})
export default class PairLayoutPageComponent {

  POLICY = POLICY;

  pairDistributionOptionsCB = signal<comboBoxOption[]>(pairDistributionOptions);

  pairDistribution = signal<PAIR_DISTRIBUTION>(PAIR_DISTRIBUTION.CENTER);


  updatePairDistribution(newVal: string) {
    console.log('Pair Distribution:', newVal);
    this.pairDistribution.set( str2PairDistribution( newVal ) );
  }

}

function str2PairDistribution(input: string): PAIR_DISTRIBUTION {

  let val: PAIR_DISTRIBUTION = PAIR_DISTRIBUTION.CENTER;

  switch (input) {

    case "oppoite":
      val = PAIR_DISTRIBUTION.OPPOSITE;
      break;

    case "center":
      val = PAIR_DISTRIBUTION.CENTER;
      break;

    case "glued":
      val = PAIR_DISTRIBUTION.GLUED;
      break

    default:
      val = PAIR_DISTRIBUTION.CENTER;
      break
  }
  return val;
}