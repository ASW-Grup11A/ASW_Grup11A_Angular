import {Injectable} from '@angular/core';

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
    const encodedKey = new TextEncoder().encode(rawKey);
    const decodedKey = new TextDecoder('utf8').decode(encodedKey);
    console.log(`Raw key ${rawKey}`);
    console.log(`Encoded key ${encodedKey}`);
    console.log(`Decoded key ${decodedKey}`);
    return rawKey;
  }
}
