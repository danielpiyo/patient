import { TestBed } from '@angular/core/testing';

import { MclinicservicesService } from './mclinicservices.service';

describe('MclinicservicesService', () => {
  let service: MclinicservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MclinicservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
