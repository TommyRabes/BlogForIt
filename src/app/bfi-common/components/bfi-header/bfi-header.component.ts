import { ViewportScroller } from '@angular/common';
import { Component, HostBinding, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bfi-header',
  templateUrl: './bfi-header.component.html',
  styleUrls: ['./bfi-header.component.scss']
})
export class BfiHeaderComponent implements OnInit, OnDestroy {
  private scrollPosition: [number, number] = [0, 0];
  scrollUnlistener: () => void = () => {};

  @HostBinding('class.out-of-viewport')
  private hidden : boolean = false;

  constructor(
    private renderer2: Renderer2,
    private ngZone: NgZone,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.scrollUnlistener = this.renderer2.listen('document', 'scroll', () => {
        this.updateScrollPosition(this.viewportScroller.getScrollPosition());
      });
    });
  }

  updateScrollPosition(position: [number, number]) {
    this.ngZone.run(() => {
      if (this.scrollPosition[1] > position[1]) {
        this.onScrollUp();
      } else if (this.scrollPosition[1] < position[1]) {
        this.onScrollDown();
      }
    });
    this.scrollPosition = position;
  }

  private onScrollUp(): void {
    this.hidden = false;
  }

  private onScrollDown(): void {
    this.hidden = true;
  }

  ngOnDestroy(): void {
    this.scrollUnlistener();
  }
}
