import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { Color } from '../../classes/color';
import { BulletComponent } from '../bullet/bullet.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent, BulletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(hostElement.querySelector('div')).toBeTruthy();
  });

  it('should display tag name in black when a bright color is forwarded', () => {
    component.label = 'LIFESTYLE';
    component.color = Color.fromHex('#ffffff');
    spyOn(component.color, 'toCss').and.returnValue('rgba(255, 255, 255, 1)');

    fixture.detectChanges();

    const container = hostElement.querySelector('div') as HTMLDivElement;
    expect(container.textContent).toBe('LIFESTYLE');
    expect(container.style.color).toBe('rgb(0, 0, 0)')
    expect(container.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(container.querySelector('app-bullet')).toBeFalsy();
  });

  it('should display tag name in white when a dark color is forwarded', () => {
    component.label = 'LIFESTYLE';
    component.color = Color.fromHex('#000000');
    spyOn(component.color, 'toCss').and.returnValue('rgba(0, 0, 0, 1)');

    fixture.detectChanges();

    const container = hostElement.querySelector('div') as HTMLDivElement;
    expect(container.textContent).toBe('LIFESTYLE');
    expect(container.style.color).toBe('rgb(255, 255, 255)')
    expect(container.style.backgroundColor).toBe('rgb(0, 0, 0)');
    expect(container.querySelector('app-bullet')).toBeFalsy();
  });

  it('should display tag name in uppercase', () => {
    component.label = 'technology';

    fixture.detectChanges();

    const container = hostElement.querySelector('div') as HTMLDivElement;
    expect(container.textContent).toBe('TECHNOLOGY');
  });

  it('should display a bullet having the same color as the text', () => {
    component.bullet = true;
    component.color = Color.fromHex('#000000');

    fixture.detectChanges();

    const container = hostElement.querySelector('div') as HTMLDivElement;
    expect(container.querySelector('app-bullet')).toBeTruthy();
  });
});
