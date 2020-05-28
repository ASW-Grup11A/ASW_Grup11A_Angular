import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Contribution} from '../interfaces/contribution';
import {catchError} from 'rxjs/operators';
import {ApiKeyManagerService} from './api-key-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private url = 'https://empo-news.herokuapp.com/api/v1';
  private headers;

  constructor(
    private http: HttpClient,
    private apiKeyManager: ApiKeyManagerService
  ){
    //const apiKey = this.apiKeyManager.apiKey;
    const apiKey = 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
    this.headers = new HttpHeaders().set('Api-Key', apiKey);
  }

  createContribution(body: Contribution): Observable<Contribution> {
    return this.http.post<any>(`${this.url}/contributions`, body,
      {
        headers: this.headers,
        observe: 'body',
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
        observe: 'body',
        params,
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<Contribution[]>(`getAllContributions`))
      );
  }

  updateContribution(contributionId: string, paramsToUpdate: HttpParams): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}`, {}, {
      headers: this.headers,
      observe: 'body',
      params: paramsToUpdate,
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('updateContribution'))
      );
  }

  getContribution(contributionId: string): Observable<Contribution> {
    return this.http.get<Contribution>(`${this.url}/contribution/${contributionId}`,
      {
        headers: this.headers,
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<Contribution>(`getContribution`))
      );
  }

  deleteContribution(contributionId: string): Observable<any> {
    return this.http.delete(`${this.url}/contribution/${contributionId}`,
      {
        headers: this.headers,
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError(`deleteContribution`))
      );
  }

  voteContribution(contributionId: string): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}/vote`, {}, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('voteContribution'))
      );
  }

  unvoteContribution(contributionId: string): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}/unvote`, {}, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('unvoteContribution'))
      );
  }

  hideContribution(contributionId: string): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}/hide`, {}, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('hideContribution'))
      );
  }

  unhideContribution(contributionId: string): Observable<Contribution> {
    return this.http.put(`${this.url}/contribution/${contributionId}/unhide`, {}, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('unhideContribution'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + 'in operation: ' + operation);
      return of(result as T);
    };
  }
}
