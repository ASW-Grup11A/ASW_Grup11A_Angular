import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() {
  }

  static encodeParameters(parameters: Map<string, any>): string {
    if (parameters.size === 0) {
      return '';
    }

    let urlParameters = '?';
    let firstIteration = true;

    for (const [key, value] of parameters) {
      if (!firstIteration) {
        urlParameters = urlParameters.concat('&');
      }

      urlParameters = urlParameters.concat(`${key}=${value}`);
      firstIteration = false;
    }

    return urlParameters;
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
}
