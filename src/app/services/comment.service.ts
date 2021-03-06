import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Comment} from '../interfaces/comment';
import {catchError} from 'rxjs/operators';
import {ApiKeyManagerService} from './api-key-manager.service';
import {Contribution} from '../interfaces/contribution';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://empo-news.herokuapp.com/api/v1';
  private headers;

  constructor(
    private http: HttpClient,
    private apiKeyManager: ApiKeyManagerService
  ) {
    const apiKey = this.apiKeyManager.apiKey;
    this.headers = new HttpHeaders().set('Api-Key', apiKey);
  }

  createComment(contributionId: string, body: object): Observable<Comment> {
    return this.http.post(`${this.url}/contribution/${contributionId}/comments`, body,
      {
        headers: this.headers,
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError<any>(`createComment`))
      );
  }

  getAllComments(params: HttpParams): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments`, {
      headers: this.headers,
      observe: 'body',
      params,
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('getAllComments'))
      );
  }

  getAllCommentsFromContribution(contributionId: string, params: HttpParams): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}/contribution/${contributionId}/comments`, {
      headers: this.headers,
      observe: 'body',
      params,
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleError<any>('getAllComments'))
      );
  }

  getComment(commentId: string): Observable<Comment> {
    return this.http.get<Comment>(`${this.url}/comment/${commentId}`, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        catchError(this.handleHttpError)
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + 'in operation: ' + operation);
      return of(result as T);
    };
  }

  private handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    return throwError(error.status);
  }
}
