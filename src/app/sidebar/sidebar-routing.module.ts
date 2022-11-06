import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchComponent } from '../merch/merch.component';

const routes: Routes = [{path: 'Merch/All', component: MerchComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
