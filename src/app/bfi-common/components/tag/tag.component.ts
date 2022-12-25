import { Component, Input } from '@angular/core';
import { Color } from '../../classes/color';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  private $color: Color = Color.white();

  @Input()
  label: string = '';

  @Input()
  bullet: boolean = false;
  
  @Input()
  set color(color: Color) {
    this.$color = color;
    if (Color.white().contrast(this.color) > Color.black().contrast(this.color)) {
      this.textColor = Color.white();
    } else {
      this.textColor = Color.black();
    }
  }

  get color() {
    return this.$color;
  }

  textColor: Color = Color.black();
}
