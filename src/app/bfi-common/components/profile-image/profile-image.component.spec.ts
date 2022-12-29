import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageComponent } from './profile-image.component';
import { BaseImageComponent } from '../base-image/base-image.component';

describe('ProfileImageComponent', () => {
  let component: ProfileImageComponent;
  let fixture: ComponentFixture<ProfileImageComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(BaseImageComponent);
    expect(component.dimension).toBeTruthy();
    expect(component.dimension.width).toBe(50);
    expect(component.dimension.height).toBe(50);
    expect(component.radius).toBe(25);
    expect(component.getStyle()).toEqual({
      width: '50px', height: '50px',
      'background-image': "url('../../../../assets/images/users/male-avatar.jpg')",
      'border-radius': '25px'
    });
  });

  it('should tweak the component properties when the size is updated', () => {
    const oldDimension = component.dimension;
    component.size = 40;
    expect(component.dimension).not.toBe(oldDimension);
    expect(component.dimension).toBeTruthy();
    expect(component.dimension.width).toBe(40);
    expect(component.dimension.height).toBe(40);
    expect(component.radius).toBe(20);
    expect(component.getStyle()).toEqual({
      width: '40px', height: '40px',
      'background-image': "url('../../../../assets/images/users/male-avatar.jpg')",
      'border-radius': '20px'
    });
  });

  it('should not update when the assigned size is same as the currently active size', () => {
    const oldDimension = component.dimension;
    component.size = 50;
    expect(component.dimension).toBe(oldDimension);
    expect(component.radius).toBe(25);
    expect(component.getStyle()).toEqual({
      width: '50px', height: '50px',
      'background-image': "url('../../../../assets/images/users/male-avatar.jpg')",
      'border-radius': '25px'
    });
  });
});
