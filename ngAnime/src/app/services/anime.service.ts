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

create(anime: Anime): Observable<Anime> {
return this.http.post<Anime>(this.url, anime).pipe(
  catchError((err: any) => {
    console.log(err);
    return throwError(
      () => new Error('AnimeService.create(): error deleting todo' + err)
    );
    })
    );
}

update(anime:Anime): Observable<Anime>{
  return this.http.put<Anime>(this.url + '/' + anime.id, anime, ).pipe(
    catchError((err: any) => {
      console.error('AnimeService.update(): error updating anime');
      console.error(err);
      return throwError(
        () => new Error('AnimeService.update(): error updating anime' + err)
      );
    })
  );
}

destroy(animeId: number): Observable<void>{
  return this.http.delete<void>(`${this.url}/${animeId}`).pipe(
    catchError((err: any) => {
      console.error('AnimeService.destroy(): error deleting anime');
      console.error(err);
      return throwError(
        () => new Error('AnimeService.delete(): error deleting anime' + err)
      );
    })
  );
}
}
