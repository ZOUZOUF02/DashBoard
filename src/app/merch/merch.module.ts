import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchRoutingModule } from './merch-routing.module';
import { MerchComponent } from './merch.component';
import { OneMerchComponent } from './one-merch/one-merch.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MerchSelectComponent } from './merch-select/merch-select.component';
import { FormsModule } from '@angular/forms';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { EditMerchComponent } from './edit-merch/edit-merch.component';
@NgModule({
  declarations: [
    MerchComponent,
    OneMerchComponent,
    MerchSelectComponent,
    EditMerchComponent,
  ],
  imports: [
    CommonModule,
    MerchRoutingModule,
    MainNavbarModule,
    FormsModule,
    SidebarModule,
    BackToTopModule,
  ],
  exports: [
    MerchComponent,
    OneMerchComponent,
    MerchSelectComponent,
    CommonModule,
    MerchRoutingModule,
    MainNavbarModule,
    FormsModule,
    SidebarModule,
  ]
})
export class MerchModule { }
