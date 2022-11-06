import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { OneVideoComponent } from './one-video/one-video.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { EditVideoComponent } from './edit-video/edit-video.component';

@NgModule({
  declarations: [
    VideosComponent,
    OneVideoComponent,
    EditVideoComponent,
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    SidebarModule,
    MainNavbarModule,
    BackToTopModule
  ]
})
export class VideosModule { }
