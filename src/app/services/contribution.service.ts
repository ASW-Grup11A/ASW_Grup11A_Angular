import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Contribution} from "../interfaces/contribution";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private url = 'http://empo-news.herokuapp.com/api/v1';
  private headers;

  constructor(
    private http: HttpClient
  ){
    this.headers = new HttpHeaders().set('Api-Key', 'c2dtYXJjc2dzZ21hcmNzZ0BnbWFpbC5jb20y');
  }

  createContribution(body: object): Observable<Contribution> {
    return this.http.post(`${this.url}/contributions`, body,
      {
        headers: this.headers,
        observe: "body",
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<any>(`createContribution`))
      );
  }

  getAllContributions(params: HttpParams): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(`${this.url}/contributions`,
      {
        headers: this.headers,
        observe: "body",
        params: params,
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<Contribution[]>(`getAllContributions`))
      );
  }

  updateContribution(contributionId: string, paramsToUpdate: HttpParams): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}`, {}, {
      headers: this.headers,
      observe: "body",
      params: paramsToUpdate,
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('updateContribution'))
      )
  }

  getContribution(contributionId: string): Observable<Contribution> {
    return this.http.get<Contribution>(`${this.url}/contribution/${contributionId}`,
      {
        headers: this.headers,
        observe: "body",
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<Contribution>(`getContribution`))
      );
  }

  deleteContribution(contributionId: string): void {
    this.http.delete(`${this.url}/contribution/${contributionId}`,
      {
        headers: this.headers,
        observe: "body",
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError(`deleteContribution`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
