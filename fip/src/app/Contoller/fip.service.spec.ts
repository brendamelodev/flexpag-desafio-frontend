import { TestBed } from '@angular/core/testing';

import { FipService } from './fip.service';

describe('FipService', () => {
  let service: FipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
