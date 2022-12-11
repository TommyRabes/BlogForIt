import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfiNavbarComponent } from './bfi-navbar.component';

describe('BfiNavbarComponent', () => {
  let component: BfiNavbarComponent;
  let fixture: ComponentFixture<BfiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BfiNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
