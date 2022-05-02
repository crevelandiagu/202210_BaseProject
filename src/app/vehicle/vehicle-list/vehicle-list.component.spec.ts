import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehicleListComponent } from './vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehicle } from '../vehicle'

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    component.vehicles = [
      new Vehicle(faker.unique(faker.datatype.number), faker.vehicle.manufacturer(), faker.vehicle.vehicle(), faker.word.noun(), faker.datatype.number(), faker.datatype.number(), faker.vehicle.color(), faker.image.imageUrl()),
      new Vehicle(faker.unique(faker.datatype.number), faker.vehicle.manufacturer(), faker.vehicle.vehicle(), faker.word.noun(), faker.datatype.number(), faker.datatype.number(), faker.vehicle.color(), faker.image.imageUrl()),
      new Vehicle(faker.unique(faker.datatype.number), faker.vehicle.manufacturer(), faker.vehicle.vehicle(), faker.word.noun(), faker.datatype.number(), faker.datatype.number(), faker.vehicle.color(), faker.image.imageUrl())
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an header in table', () => {
    expect(debug.query(By.css("thead")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have 3 rows', () => {
    expect(debug.queryAll(By.css("table > tbody > .table-tr")).length).toEqual(3);
  });

});
