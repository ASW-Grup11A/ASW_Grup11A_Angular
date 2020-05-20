import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Contribution} from "../interfaces/contribution";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContributionService {
  private url = 'api/contributions';

  constructor(private http: HttpClient) { }

  createContribution(data: {title: string, url?: string, text?: string}): Observable<Contribution> {
    return this.http.post<Contribution>(this.url, data)
      .pipe(this.handleError<Contribution>('createContribution'));
  }

  getContributions(): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(this.url)
      .pipe(
        catchError(this.handleError<Contribution[]>('getContributions', []))
      );
  }

  updateContribution(data: {title?: string, text?: string}): Observable<Contribution> {
    return this.http.put<Contribution>(this.url, data)
      .pipe(
        catchError(this.handleError<Contribution>('updateContribution'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
