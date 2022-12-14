import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BfiNavlinkComponent } from '../bfi-navlink/bfi-navlink.component';

import { BfiNavbarComponent } from './bfi-navbar.component';

describe('BfiNavbarComponent', () => {
  let component: BfiNavbarComponent;
  let fixture: ComponentFixture<BfiNavbarComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiNavbarComponent, BfiNavlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain BlogForIt logo', () => {
    expect(hostElement.querySelector('#home-logo')).toBeTruthy();
  });

  it('should contain navigation links', () => {
    const linksContainer = hostElement.querySelector('div#navbar-links');
    expect(linksContainer).toBeTruthy();
    const links = linksContainer?.querySelectorAll('app-bfi-navlink');
    expect(links).toHaveSize(3);
  });

  it('should contain a search button', () => {
    const searchBtn = hostElement.querySelector('div#action-buttons');
    expect(searchBtn).toBeTruthy();
    expect(searchBtn?.querySelector('i.icon.search-icon')).toBeTruthy();
  });

  it('should contain a menu button', () => {
    const searchBtn = hostElement.querySelector('div#action-buttons');
    expect(searchBtn).toBeTruthy();
    expect(searchBtn?.querySelector('i.icon.menu-icon')).toBeTruthy();
  });
});
