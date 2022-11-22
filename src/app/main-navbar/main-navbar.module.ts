import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { NotifComponent } from './notif/notif.component';
import { RecentNotifComponent } from '../home/recent-notif/recent-notif.component';
@NgModule({
  declarations: [
    MainNavbarComponent,
    SearchComponent,
    ProfileComponent,
    NotifComponent,
    RecentNotifComponent,


  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainNavbarComponent,
    SearchComponent,
    ProfileComponent,
    NotifComponent,
    RecentNotifComponent,
    CommonModule,
  ]
})
export class MainNavbarModule { }
