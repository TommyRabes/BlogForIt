import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfiNavbarComponent } from '../bfi-navbar/bfi-navbar.component';
import { BfiNavlinkComponent } from '../bfi-navlink/bfi-navlink.component';

import { BfiHeaderComponent } from './bfi-header.component';

describe('BfiHeaderComponent', () => {
  let component: BfiHeaderComponent;
  let fixture: ComponentFixture<BfiHeaderComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiHeaderComponent, BfiNavbarComponent, BfiNavlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(hostElement.classList).not.toContain('out-of-viewport');
  });

  it('should use one BfiNavbar component', () => {
    expect(hostElement.querySelectorAll('app-bfi-navbar')).toHaveSize(1);
  });

  it('should be hidden after scrolling down', async () => {
    component.updateScrollPosition([0, 200]);
    fixture.detectChanges();
    expect(hostElement.classList).toContain('out-of-viewport');
  });

  it('should be displayed after scrolling up', () => {
    component.updateScrollPosition([0, 200]);
    fixture.detectChanges();
    component.updateScrollPosition([0, 100]);
    fixture.detectChanges();
    expect(hostElement.classList).not.toContain('out-of-viewport');
  });
});
