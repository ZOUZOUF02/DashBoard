import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoAddPageComponent } from './video-add-page.component';
import { VideoAddPageRoutingModule } from './video-add-page-routing.module';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { VideoSampleCardComponent } from './video-sample-card/video-sample-card.component';
@NgModule({
  declarations: [VideoAddPageComponent, VideoSampleCardComponent],
  imports: [
    CommonModule,
    VideoAddPageRoutingModule,
    MainNavbarModule,
    SidebarModule,
    BackToTopModule,
  ]
})
export class VideoAddPageModule { }
