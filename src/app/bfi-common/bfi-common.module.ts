import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BfiNavbarComponent } from './components/bfi-navbar/bfi-navbar.component';
import { BfiHeaderComponent } from './components/bfi-header/bfi-header.component';
import { BfiNavlinkComponent } from './components/bfi-navlink/bfi-navlink.component';
import { BaseImageComponent } from './components/base-image/base-image.component';
import { TagComponent } from './components/tag/tag.component';
import { BulletComponent } from './components/bullet/bullet.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';



@NgModule({
  declarations: [
    BfiNavbarComponent,
    BfiHeaderComponent,
    BfiNavlinkComponent,
    BaseImageComponent,
    TagComponent,
    BulletComponent,
    ProfileImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BfiHeaderComponent,
    BaseImageComponent,
    TagComponent,
    ProfileImageComponent
  ]
})
export class BfiCommonModule { }
