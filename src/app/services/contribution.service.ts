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

  getContributions(): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(this.url)
      .pipe(
        catchError(this.handleError<Contribution[]>('getContributions', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
