import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  brands: string[] = [];
  amountBrand: string[] = [];

  constructor(private vehicleService: VehicleService) {}

  getVehicles() {
    this.vehicleService.getVehicle().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.vehicles.forEach((vehicle) => this.brands.push(vehicle.marca));
      this.getVehiclesBrand();
    });
  }

  getVehiclesBrand() {
    let obj = this.brands.reduce<Record<string, number>>((a, d) => (a[d] ? (a[d] += 1) : (a[d] = 1), a), {});
    for (const property in obj) {
      this.amountBrand.push(`${property}: ${obj[property]}`)
    }
  }

  ngOnInit(): void {
    this.getVehicles();
  }
}
