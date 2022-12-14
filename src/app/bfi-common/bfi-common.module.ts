import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BfiNavbarComponent } from './components/bfi-navbar/bfi-navbar.component';
import { BfiHeaderComponent } from './components/bfi-header/bfi-header.component';
import { BfiNavlinkComponent } from './components/bfi-navlink/bfi-navlink.component';



@NgModule({
  declarations: [
    BfiNavbarComponent,
    BfiHeaderComponent,
    BfiNavlinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BfiHeaderComponent
  ]
})
export class BfiCommonModule { }
