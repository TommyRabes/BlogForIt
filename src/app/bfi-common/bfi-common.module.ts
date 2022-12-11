import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BfiNavbarComponent } from './components/bfi-navbar/bfi-navbar.component';
import { BfiHeaderComponent } from './components/bfi-header/bfi-header.component';



@NgModule({
  declarations: [
    BfiNavbarComponent,
    BfiHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BfiHeaderComponent,
    BfiNavbarComponent
  ]
})
export class BfiCommonModule { }
