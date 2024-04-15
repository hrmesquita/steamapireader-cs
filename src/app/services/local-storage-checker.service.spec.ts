import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { LocalStorageCheckerService } from './local-storage-checker.service';

describe('LocalStorageCheckerService', () => {
  let service: LocalStorageCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' } // Mock the platformId as 'browser'
      ]
    });
    service = TestBed.inject(LocalStorageCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if value exists in local storage', () => {
    const key = 'testKey';
    localStorage.setItem(key, 'testValue');
    expect(service.hasValue(key)).toBe(true);
  });

  it('should return false if value does not exist in local storage', () => {
    const key = 'nonExistentKey';
    expect(service.hasValue(key)).toBe(false);
  });
});

