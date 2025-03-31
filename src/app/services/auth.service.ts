import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isLoggedIn';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  login(username: string, password: string): boolean {
    if (username === 'a' && password === '1') {
      // ตรวจสอบว่าอยู่ในเบราว์เซอร์หรือไม่ก่อนเข้าถึง localStorage
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.storageKey, 'true');
      }
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    // ตรวจสอบว่าอยู่ในเบราว์เซอร์หรือไม่ก่อนเข้าถึง localStorage
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.storageKey) === 'true';
    }
    return false;
  }

  logout() {
    // ตรวจสอบว่าอยู่ในเบราว์เซอร์หรือไม่ก่อนลบข้อมูลจาก localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
