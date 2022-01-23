import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'api/animes';

  constructor(private http: HttpClient) {}

index(): Observable<Anime[]> {
return this.http.get<Anime[]>(this.url).pipe(
  catchError((err: any) => {
    console.error(err);
    return throwError(
      () => new Error('AnimeService.index(): error getting anime' + err)
    );
  })
)
}
}
