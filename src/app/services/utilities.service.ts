import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() { } // Constructor

  static encodeParameters(parameters: Map<string, any>): string {
    if (parameters.size === 0) {
      return '';
    }

    let urlParameters = '?';
    let firstIteration = true;

    for (let [key, value] of parameters) {
      if (!firstIteration) {
        urlParameters = urlParameters.concat('&');
      }

      urlParameters = urlParameters.concat(`${key}=${value}`);
      firstIteration = false;
    }

    return urlParameters;
  }
}
