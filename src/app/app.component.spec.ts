import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BaseImageComponent } from './bfi-common/components/base-image/base-image.component';
import { BfiHeaderComponent } from './bfi-common/components/bfi-header/bfi-header.component';
import { BfiNavbarComponent } from './bfi-common/components/bfi-navbar/bfi-navbar.component';
import { BfiNavlinkComponent } from './bfi-common/components/bfi-navlink/bfi-navlink.component';
import { TagComponent } from './bfi-common/components/tag/tag.component';
import { BulletComponent } from './bfi-common/components/bullet/bullet.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BfiHeaderComponent,
        BfiNavbarComponent,
        BfiNavlinkComponent,
        BaseImageComponent,
        TagComponent,
        BulletComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'BlogForIt'`, () => {
    expect(app.title).toEqual('BlogForIt');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('BlogForIt app is running!');
  });

  it('should use one BfiHeader component on top of the page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-bfi-header')).toHaveSize(1);
    const header = compiled.querySelector('app-bfi-header');
    expect(header).toBeTruthy();
    expect(header).toBe(compiled.firstElementChild);
    expect(header?.id).toBe('header');
  });

  it('should use two BaseImage components in the main block of the page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('main app-base-image')).toHaveSize(2);
  });
});
