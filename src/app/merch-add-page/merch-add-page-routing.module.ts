import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchAddPageComponent } from './merch-add-page.component';

const routes: Routes = [{ path: '', component: MerchAddPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchAddPageRoutingModule { }
