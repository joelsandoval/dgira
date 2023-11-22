import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysAdminRoutingModule } from './sys-admin-routing.module';
import { SysAdminComponent } from './sys-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SysAdminComponent
  ],
  imports: [
    CommonModule,
    SysAdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class SysAdminModule { }
