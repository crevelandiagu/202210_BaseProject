import { inject, TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleService]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be created', inject([VehicleService],(service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
