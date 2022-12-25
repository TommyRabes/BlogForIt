import { Component, Input } from '@angular/core';
import { Color } from '../../classes/color';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.svg',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {
  @Input()
  color: Color = Color.black();
}
