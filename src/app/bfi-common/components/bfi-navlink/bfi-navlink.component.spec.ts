import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfiNavlinkComponent } from './bfi-navlink.component';

describe('BfiNavlinkComponent', () => {
  let component: BfiNavlinkComponent;
  let fixture: ComponentFixture<BfiNavlinkComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiNavlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfiNavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an anchor', () => {
    expect(hostElement.querySelector('a.nav-link')).toBeTruthy();
  });

  it('should not contain any band by default', () => {
    expect(hostElement.querySelector('div.band')).toBeFalsy();
  });

  it('should display nothing inside the anchor', () => {
    expect(hostElement.querySelector('a.nav-link')?.textContent).toBe('');
  });

  it('should display the name property as the content of the anchor', () => {
    component.name = 'Javascript';
    fixture.detectChanges();
    expect(hostElement.querySelector('a.nav-link')?.textContent).toBe(component.name);
  });

  it('should display a band underneath the link when a color is passed', () => {
    component.color = 'cornflowerblue';
    fixture.detectChanges();
    expect(hostElement.querySelector('div.band')).toBeTruthy();
    expect((hostElement.querySelector('div.band') as HTMLElement).style.backgroundColor).toBe(component.color);
  });
});
