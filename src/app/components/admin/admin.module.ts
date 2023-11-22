import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AreasComponent } from './areas/areas.component';
import { AreasNuevoComponent } from './areas-nuevo/areas-nuevo.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosNuevoComponent } from './empleados-nuevo/empleados-nuevo.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AdminComponent,
    AreasComponent,
    AreasNuevoComponent,
    EmpleadosComponent,
    EmpleadosNuevoComponent,
    OrganigramaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    NgHttpLoaderModule,
    MatInputModule,
    MatSelectModule, 
  ]
})
export class AdminModule { }
