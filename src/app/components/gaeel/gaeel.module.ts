import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaeelRoutingModule } from './gaeel-routing.module';
import { GaeelComponent } from './gaeel.component';


@NgModule({
  declarations: [
    GaeelComponent
  ],
  imports: [
    CommonModule,
    GaeelRoutingModule
  ]
})
export class GaeelModule { }
