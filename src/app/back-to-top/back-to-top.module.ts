import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top.component';
import { OverlayModule } from "@angular/cdk/overlay";


@NgModule({
  declarations: [BackToTopComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports:[BackToTopComponent, CommonModule, OverlayModule]
})
export class BackToTopModule { }
