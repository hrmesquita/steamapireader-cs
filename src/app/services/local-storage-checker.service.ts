import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageCheckerService {
  isBrowser: boolean;
  isServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

  /**
   * Checks if a value exists in the local storage after confirming the platform.
   * @param key - The key to check for in the local storage.
   * @returns A boolean indicating whether the value exists in the local storage.
   */
  hasValue(key: string): boolean {
    if (this.isBrowser) {
      const value = localStorage.getItem(key);
      return value !== null && value !== undefined;
    } else if (this.isServer) {
      return false;
    }
    return false;
  }
}
