import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { OptionsComponent } from './options/options.component';
import { SidebarComponent } from './sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { MerchOptionComponent } from './merch-option/merch-option.component';
import { VideoOptionsComponent } from './video-options/video-options.component';
import { VideoCategoryComponent } from './video-category/video-category.component';


@NgModule({
  declarations: [
    SidebarComponent,
    OptionsComponent,
    PagesComponent,
    MerchOptionComponent,
    VideoOptionsComponent,
    VideoCategoryComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
  ],
  exports : [
    SidebarComponent,
    OptionsComponent,
    PagesComponent,
    CommonModule,
    SidebarRoutingModule,
  ]
})
export class SidebarModule { }
