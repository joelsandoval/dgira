import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysAdminComponent } from './sys-admin.component';

const routes: Routes = [
  {
    path: '', component: SysAdminComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysAdminRoutingModule { }
