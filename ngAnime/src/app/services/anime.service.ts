import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'http://localhost:8083/';
  private url = 'api/animes';
  constructor(private http: HttpClient) {}


}
