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
    return 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
  }

  set apiKey(value: string) {
    this.key = value;
  }
}
