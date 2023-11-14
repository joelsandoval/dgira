import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaeelComponent } from './gaeel.component';

const routes: Routes = [
  {
    path: '', component: GaeelComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaeelRoutingModule { }
