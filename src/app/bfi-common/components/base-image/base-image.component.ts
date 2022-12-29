import { Component, Input } from '@angular/core';
import { Dimension } from '../../classes/dimension';

@Component({
  selector: 'app-base-image',
  templateUrl: './base-image.component.html',
  styleUrls: ['./base-image.component.scss']
})
export class BaseImageComponent {

  // static Omit = <K extends keyof BaseImageComponent>(keys: K[]): new () => Omit<BaseImageComponent, typeof keys[number]> => BaseImageComponent;

  protected $src: string = '../../../../assets/images/posts/default-post-cover.png';
  protected $radius: number = 0;
  protected $dimension: Dimension = new Dimension(400, 400);

  get src(): string {
    return this.$src;
  }

  @Input()
  set src(src: string) {
    if (src) {
      this.$src = src;
    }
  }

  get radius(): number {
    return this.$radius;
  }

  @Input()
  set radius(radius: number) {
    if (radius >= 0) {
      this.$radius = radius;
    }
  }

  @Input('width')
  set width(width: number) {
    if (this.$dimension.width != width) {
      this.$dimension = new Dimension(width, this.$dimension.height);
    }
  }

  @Input('height')
  set height(height: number) {
    if (this.$dimension.height != height) {
      this.$dimension = new Dimension(this.$dimension.width, height);
    }
  }

  get dimension(): Dimension {
    return this.$dimension;
  }

  getStyle(): { [cssProperty: string]: string } {
    return {
      width: this.dimension.width + 'px', height: this.dimension.height + 'px',
      'background-image': `url('${this.src}')`,
      'border-radius': this.radius + 'px'
    };
  }
}
