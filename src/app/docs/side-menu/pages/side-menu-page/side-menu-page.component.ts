import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-menu-page',
  imports: [RouterOutlet],
  templateUrl: './side-menu-page.component.html',
  styleUrl: './side-menu-page.component.css',
})
export default class SideMenuPageComponent { }
