import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {
  }

  static createApiKey(params: {username: string, email: string}): string {
    let rawKey = params.username + params.email;
    const usernameLength = params.username.length;
    const emailLength = params.email.length;
    if (usernameLength > emailLength) {
      rawKey += Math.floor(usernameLength / emailLength).toString();
    } else {
      rawKey += Math.floor(emailLength / usernameLength).toString();
    }
    return btoa(rawKey);
  }

}
