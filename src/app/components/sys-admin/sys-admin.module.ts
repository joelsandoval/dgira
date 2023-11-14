import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysAdminRoutingModule } from './sys-admin-routing.module';
import { SysAdminComponent } from './sys-admin.component';


@NgModule({
  declarations: [
    SysAdminComponent
  ],
  imports: [
    CommonModule,
    SysAdminRoutingModule
  ]
})
export class SysAdminModule { }
