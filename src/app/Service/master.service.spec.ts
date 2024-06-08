import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });
});
