import { Component, OnInit } from '@angular/core';

import { Vehicles } from '../vehicles';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: Array<Vehicles> = [];
  resumen: any;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehiclesService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;

      this.resumen = this.gerResume(vehicles);

    });
  }

  gerResume(vehicles: Vehicles[]) {
    let group =  this.groupBy(vehicles, 'marca');

    let fi = [];

    for (const x in group) {

      let i = 0;
      for (const y in group[x]) {
        i++;
      }
      let ja = {
        marca: x,
        cantidad: i
      };
      fi.push(ja);
    }

    return fi;
  }

  groupBy(objectArray: any, property: any) {
    return objectArray.reduce(function (acc: any, obj: any) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

}
