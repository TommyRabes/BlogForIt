import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bfi-navlink',
  templateUrl: './bfi-navlink.component.html',
  styleUrls: ['./bfi-navlink.component.scss']
})
export class BfiNavlinkComponent {
  @Input()
  name!: string;

  @Input()
  color!: string;
}
