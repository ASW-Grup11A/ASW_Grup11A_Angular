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

  constructor(
    private http: HttpClient,
    private readonly headers: HttpHeaders,
    ) {
    this.headers = new HttpHeaders();
    this.headers.append("Api-Key", "c2dtYXJjc2dzZ21hcmNzZ0BnbWFpbC5jb20y");
  }

  getUserProfile(username: string): Observable<User> {
    console.log("I'm gonna send the request");
    return this.http.get<User>(`${this.url}/${username}`,
      {
        headers: this.headers,
        observe: "body" as const,
        responseType: 'json' as const
      })
      .pipe(
      catchError(this.handleError<User>(`getUser username=${username}`))
    );
  }

  updateUserProfile(paramsToUpdate: HttpParams): Observable<any> {
    return this.http.put(this.url, {}, {
      headers: this.headers,
      observe: "body" as const,
      params: paramsToUpdate,
      responseType: 'json' as const
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
