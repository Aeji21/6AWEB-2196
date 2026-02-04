import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay(1));
  }
}
