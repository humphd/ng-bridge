// We need to grab the current environment (e.g,. dev vs. prod) for the apiUrl
import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
// Import the HttpClient service so we can inject it into our own
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Import the various rxjs pieces we need for doing
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BridgeId, Bridge } from './bridge';

// Decorate our class as an Injectable Service managed by the root injector
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  // Pull the correct api URL to use out of the environment vs. hard-coding
  apiUrl: string = environment.apiUrl;

  constructor(
    // Inject the HttpClient service into our data service
    private http: HttpClient
  ) {}

  /**
   * A generic error handler for all our getters
   */
  handleError(error: HttpErrorResponse): Observable<never> {
    // See what kind of error this was: client side or server side
    if (error.error instanceof ErrorEvent) {
      console.log('[DataManagerService] client-side error', error.error.message);
    } else {
      console.log(`[DataManagerService] server-side error: status=${error.status}`, error.error);
    }

    // Return the error on so it can be consumed in the caller
    return throwError('Error communicating with API server');
  }

  /**
   * Provide a getter for accessing all bridges.  Use an HTTP GET request
   * to our bridges API.
   */
  getBridges(): Observable<BridgeId[]> {
    const url = `${this.apiUrl}/bridges`;
    return this.http.get<BridgeId[]>(url)
      .pipe(
        retry(2), // retry a failed request up to 2 times
        catchError(this.handleError)
      );
  }

  /**
   * Provide a getter for accessing a single bridge by its `id`. Use an
   * HTTP GET request to our bridges API.
   * @param id a String with the bridge's id.
   */
   getBridge(id: string): Observable<Bridge> {
    const url = `${this.apiUrl}/bridges/${id}`;
    return this.http.get<Bridge>(url)
      .pipe(
        retry(2), // retry a failed request up to 2 times
        catchError(this.handleError)
      );
  }
}
