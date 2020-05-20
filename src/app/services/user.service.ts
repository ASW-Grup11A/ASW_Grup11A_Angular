import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../interfaces/user";
import {catchError} from "rxjs/operators";
import {UtilitiesService} from "./utilities.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username}`)
      .pipe(
        catchError(this.handleError<User>(`getUser username=${username}`))
      );
  }

  updateUser(user: User, userUpdate: Map<string, any>): Observable<any> {
    let requestUrl = this.url.concat(UtilitiesService.encodeParameters(userUpdate));

    return this.http.put(requestUrl, {})
      .pipe(
        catchError(this.handleError<any>('updateUser'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
