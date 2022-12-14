import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BfiHeaderComponent } from './bfi-common/components/bfi-header/bfi-header.component';
import { BfiNavbarComponent } from './bfi-common/components/bfi-navbar/bfi-navbar.component';
import { BfiNavlinkComponent } from './bfi-common/components/bfi-navlink/bfi-navlink.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BfiHeaderComponent,
        BfiNavbarComponent,
        BfiNavlinkComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BlogForIt'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BlogForIt');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BlogForIt app is running!');
  });

  it('should use one BfiHeader component on top of the page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-bfi-header')).toHaveSize(1);
    const header = compiled.querySelector('app-bfi-header');
    expect(header).toBeTruthy();
    expect(header).toBe(compiled.firstElementChild);
    expect(header?.id).toBe('header');
  });
});
