import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  constructor() { }

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

  static convertToHttpParams(parameters: Map<string, any>): HttpParams {
    let params: HttpParams = new HttpParams();
    for (let [key, value] of parameters) {
      params.append(key, value);
    }
    return params;
  }
}
