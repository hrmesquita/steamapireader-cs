import { TestBed } from '@angular/core/testing';

import { LocalStorageCheckerService } from './local-storage-checker.service';

describe('LocalStorageCheckerService', () => {
  let service: LocalStorageCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
