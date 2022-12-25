import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletComponent } from './bullet.component';
import { Color } from '../../classes/color';

describe('BulletComponent', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a bullet with the forwarded color', () => {
    spyOn(component.color, 'toCss').and.returnValue('rgba(126, 165, 145, 1)');

    fixture.detectChanges();

    expect(hostElement.querySelector('svg')!.getAttribute('fill')).toBe('rgba(126, 165, 145, 1)');
  });
});
