import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../interfaces/user";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://empo-news.herokuapp.com/api/v1/profile';
  private headers;

  constructor(
    private http: HttpClient
  ){
    this.headers = new HttpHeaders().set('Api-Key', 'c2dtYXJjc2dzZ21hcmNzZ0BnbWFpbC5jb20y');
  }

  getUserProfile(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username}`,
      {
        headers: this.headers,
        observe: "body",
        responseType: 'json'
      })
      .pipe(
      catchError(this.handleError<User>(`getUser username=${username}`))
    );
  }

  updateUserProfile(paramsToUpdate: HttpParams): Observable<User> {
    return this.http.put(this.url, {}, {
      headers: this.headers,
      observe: "body",
      params: paramsToUpdate,
      responseType: 'json'
    })
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
