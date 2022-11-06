import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
  { path: 'Merch', loadChildren: () => import('./merch/merch.module').then(m => m.MerchModule) , canActivate:[AuthGuard]},
  { path: 'Videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) , canActivate:[AuthGuard] },
  { path: 'News', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) , canActivate:[AuthGuard] },
  { path: 'Notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) , canActivate:[AuthGuard]},
  { path: 'Merch-Add', loadChildren: () => import('./merch-add-page/merch-add-page.module').then(m => m.MerchAddPageModule), canActivate:[AuthGuard] },
  { path: 'Video-Add', loadChildren: () => import('./video-add-page/video-add-page.module').then(m => m.VideoAddPageModule), canActivate:[AuthGuard] },
  {path: '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
