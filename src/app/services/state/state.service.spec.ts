import { TestBed } from '@angular/core/testing';

import { VehicleStateService } from './vehicle-state.service';

describe('StateService', () => {
  let service: VehicleStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
