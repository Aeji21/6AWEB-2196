import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { DataService } from '../../services/data.service';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();
  filteredPosts$;

  constructor(private data: DataService) {
    this.filteredPosts$ = combineLatest([
      this.data.posts$,
      this.search$
    ]).pipe(
      map(([posts, search]) =>
        posts.filter((p: any) =>
          p.title.toLowerCase().includes(search) ||
          p.body.toLowerCase().includes(search)
        )
      )
    );
  }

  onSearch(value: string) {
    this.searchSubject.next(value.toLowerCase());
  }
}
