import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Carving {
  _id: number;
  imgurl:string;
  name: string;
  qty:number;
  size: string;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class CarvingsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatCarving(carving: Carving): Observable<any> {
    return this.httpClient.post<Carving>('http://localhost:3100/api/create-carving', carving, this.httpOptions)
      .pipe(
        catchError(this.handleError<Carving>('Error occured'))
      );
  }

  getCarving(id): Observable<Carving[]> {
    return this.httpClient.get<Carving[]>('http://localhost:3100/api/fetch-carving/' + id)
      .pipe(
        tap(_ => console.log(`carving fetched: ${id}`)),
        catchError(this.handleError<Carving[]>(`Get carving id=${id}`))
      );
  }

  getCarvings(): Observable<Carving[]> {
    return this.httpClient.get<Carving[]>('http://localhost:3100/api')
      .pipe(
        tap(carvings => console.log('carvings retrieved!')),
        catchError(this.handleError<Carving[]>('Get carving', []))
      );
  }

  updateCarving(id, carving: Carving): Observable<any> {
    return this.httpClient.put('http://localhost:3100/api/update-carving/' + id, carving, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light updated: ${id}`)),
        catchError(this.handleError<Carving[]>('Update carving'))
      );
  }

  deleteCarving(id): Observable<Carving[]> {
    return this.httpClient.delete<Carving[]>('http://localhost:3100/api/delete-carving/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`carving deleted: ${id}`)),
        catchError(this.handleError<Carving[]>('Delete light'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } ;

}

