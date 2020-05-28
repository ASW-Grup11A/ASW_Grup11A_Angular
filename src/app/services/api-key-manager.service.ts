import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyManagerService {
  private key: string;

  constructor() {
  }

  get apiKey(): string {
    // return this.key;
    return 'c2FudGkubXlwZXRjYXJlc2FudGkubXlwZXRjYXJlQGdtYWlsLmNvbTE=';
  }

  set apiKey(value: string) {
    this.key = value;
  }
}
