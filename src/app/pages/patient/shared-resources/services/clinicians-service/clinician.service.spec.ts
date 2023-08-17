import { TestBed } from '@angular/core/testing';

import { ClinicianService } from './clinician.service';

describe('ClinicianService', () => {
  let service: ClinicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
