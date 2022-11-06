import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { EditMerchComponent } from './edit-merch/edit-merch.component';
import { MerchComponent } from './merch.component';

const routes: Routes = [{path: ':Type/Edit/:id', component: EditMerchComponent},
  { path: ':Type', component: MerchComponent },
{path: '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchRoutingModule { }
