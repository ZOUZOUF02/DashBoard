import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchAddPageComponent } from './merch-add-page.component';
import { MerchAddPageRoutingModule } from './merch-add-page-routing.module';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { FormsModule } from '@angular/forms';
import { SampleCardComponent } from './sample-card/sample-card.component';



@NgModule({
  declarations: [
    MerchAddPageComponent,
    SampleCardComponent
  ],
  imports: [
    CommonModule,
    MerchAddPageRoutingModule,
    MainNavbarModule,
    SidebarModule,
    BackToTopModule,
    FormsModule,
  ]
})
export class MerchAddPageModule { }
