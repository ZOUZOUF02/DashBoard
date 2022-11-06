import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoAddPageComponent } from './video-add-page.component';

const routes: Routes = [{ path: '', component: VideoAddPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoAddPageRoutingModule { }
