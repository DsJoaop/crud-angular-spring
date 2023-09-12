import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocadoraRoutingModule } from './locadora-routing.module';
import { ActorsComponent } from './actors/actors.component';


@NgModule({
  declarations: [
    ActorsComponent
  ],
  imports: [
    CommonModule,
    LocadoraRoutingModule
  ]
})
export class LocadoraModule { }
