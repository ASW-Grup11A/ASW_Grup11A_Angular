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

  static convertToHttpParams(parameters: Map<string, any>): HttpParams {
    const params: HttpParams = new HttpParams();
    for (const [key, value] of parameters) {
      params.append(key, value);
    }
    return params;
  }

  static googleSearch(stringToSearch: string) {
    const baseUrl = 'https://www.google.com/search?q=';
    window.location.href = baseUrl + stringToSearch;
  }
}
