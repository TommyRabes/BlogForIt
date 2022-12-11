import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfiNavbarComponent } from './bfi-navbar.component';

describe('BfiNavbarComponent', () => {
  let component: BfiNavbarComponent;
  let fixture: ComponentFixture<BfiNavbarComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiNavbarComponent ]
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
    const links = linksContainer?.querySelectorAll('a.nav-link');
    expect(links).toHaveSize(3);
    expect(links?.item(0).textContent).toBe('Home');
    expect(links?.item(1).textContent).toBe('Web development');
    expect(links?.item(2).textContent).toBe('DevOps');
  });

  it('should contain a search button', () => {
    const searchBtn = hostElement.querySelector('div#search-button');
    expect(searchBtn).toBeTruthy();
    expect(searchBtn?.querySelector('i.icon.search-icon')).toBeTruthy();
  });
});
