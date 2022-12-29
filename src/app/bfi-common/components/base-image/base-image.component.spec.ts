import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseImageComponent } from './base-image.component';

describe('BaseImageComponent', () => {
  let component: BaseImageComponent;
  let fixture: ComponentFixture<BaseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dimension).toBeTruthy();
    expect(component.dimension.width).toBe(400);
    expect(component.dimension.height).toBe(400);
    expect(component.radius).toBe(0);
    expect(component.getStyle()).toEqual({
      width: '400px', height: '400px',
      'background-image': "url('../../../../assets/images/posts/default-post-cover.png')",
      'border-radius': '0px'
    });
  });

  it('should not update dimension property when the same width is assigned', () => {
    const oldDimension = component.dimension;
    component.width = 400;
    expect(component.dimension).toBe(oldDimension);
  });

  it('should update dimension property when a new width is assigned', () => {
    const oldDimension = component.dimension;
    component.width = 500;
    expect(component.dimension).not.toBe(oldDimension);
    expect(component.dimension.width).toBe(500);
  });

  it('should not update dimension property when the same height is assigned', () => {
    const oldDimension = component.dimension;
    component.height = 400;
    expect(component.dimension).toBe(oldDimension);
  });

  it('should update dimension property when a new height is assigned', () => {
    const oldDimension = component.dimension;
    component.height = 300;
    expect(component.dimension).not.toBe(oldDimension);
    expect(component.dimension.height).toBe(300);
  });

  it('should keep using the default image when a falsy src is forwarded', () => {
    component.src = '';
    expect(component.src).toBe('../../../../assets/images/posts/default-post-cover.png');
  });

  it('should not be assigned a negative radius value', () => {
    component.radius = -5;
    expect(component.radius).toBe(0);
  });

  it('should create style using set properties value', () => {
    component.src = '/images/path';
    component.width = 500;
    component.height = 300;
    component.radius = 10;
    expect(component.getStyle()).toEqual({
      width: '500px', height: '300px',
      'background-image': 'url(\'/images/path\')',
      'border-radius': '10px'
    });
  });
});
