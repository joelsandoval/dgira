import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AreasComponent } from './areas/areas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';

const routes: Routes = [
  {
    path: '', 
    component: AdminComponent, 
    children: [
      {
        path: 'areas',
        component: AreasComponent
      },
      {
        path: 'empleados',
        component: EmpleadosComponent
      },
      {
        path: 'organigrama',
        component: OrganigramaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
