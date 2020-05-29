import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyManagerService {
  private key: string;
  private name: string;

  constructor() {
    this.key="";
    this.name="";
  }

  get apiKey(): string {
    return this.key;
  }

  set apiKey(value: string) {
    this.key = value;
  }

  get username(): string {
    return this.name;
  }

  set username(value: string) {
    this.name = value;
  }
}
