import { Component, signal } from '@angular/core';

import {
  CenterLayoutComponent,
} from '@beexy/ngx-layouts';

@Component({
  selector: 'app-center-layout-page',
  imports: [CenterLayoutComponent],
  templateUrl: './center-layout-page.component.html',
  styleUrl: './center-layout-page.component.css',
})
export default class CenterLayoutPageComponent {

  selectedValue = signal<boolean>(false);

  onValueChange(event: Event) {

    // const target: HTMLSelectElement = event.target as HTMLSelectElement;
    const target = event.target;

    if (!(target instanceof (HTMLSelectElement))) return;

    const value = target.value;

    if (typeof value === 'string') {
      this.selectedValue.set((value === 'true' ? true : false));
    }

  }

}
