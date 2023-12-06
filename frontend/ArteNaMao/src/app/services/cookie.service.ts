import { Injectable } from '@angular/core';
import { CookieService as NgxCookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  constructor(private ngxCookieService: NgxCookieService) {}

  public setCookie(key: string, value: string, expires?: number): void {
    this.ngxCookieService.set(key, value, expires);
  }

  public getCookie(key: string): string | undefined {
    return this.ngxCookieService.get(key);
  }

  public deleteCookie(key: string): void {
    this.ngxCookieService.delete(key);
  }
  public isTokenValid(key: string): boolean {
    const token = this.getCookie(key);
    if (token == '') {
      return false;
    }
    return true;
  }
}