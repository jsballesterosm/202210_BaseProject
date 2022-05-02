import { TestBed } from '@angular/core/testing';

import { VehiclesService } from './vehicles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiclesService]
    });
    service = TestBed.inject(VehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
