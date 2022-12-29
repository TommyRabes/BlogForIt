import { Component, Input } from '@angular/core';
import { BaseImageComponent } from '../base-image/base-image.component';
import { Dimension } from '../../classes/dimension';

// const Omit = <T, K extends keyof T>(Class: new () => T, keys: K[]): new () => Omit<T, typeof keys[number]> => Class;

@Component({
  selector: 'app-profile-image',
  templateUrl: '../base-image/base-image.component.html',
  styleUrls: [
    '../base-image/base-image.component.scss',
    './profile-image.component.scss'
  ]
})
export class ProfileImageComponent extends BaseImageComponent {
  protected override $src: string = '../../../../assets/images/users/male-avatar.jpg';
  protected override $radius: number = 25;
  protected override $dimension: Dimension = new Dimension(50, 50);

  @Input('')
  override set width(width: number) {
    super.width = width;
  }

  @Input('')
  override set height(height: number) {
    super.height = height;
  }

  @Input('')
  override set radius(radius: number) {
    super.radius = radius;
  }

  // Must be explicitly defined when you override the accessor (and vice-versa) in order for the inheritance to be effective
  // Which means either you override both or none
  override get radius(): number {
    return super.radius;
  }

  @Input()
  set size(size: number) {
    this.width = size;
    this.height = size;
    this.radius = size / 2;
  }
}
