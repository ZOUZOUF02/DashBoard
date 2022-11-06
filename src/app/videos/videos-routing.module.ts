import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { VideosComponent } from './videos.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
const routes: Routes = [
  {path: ':Type/Edit/:id', component: EditVideoComponent},
  { path: ':Type', component: VideosComponent },
{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
