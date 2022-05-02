import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VehiclesListComponent
  ],
  declarations: [
    VehiclesListComponent
  ]
})
export class VehiclesModule { }
