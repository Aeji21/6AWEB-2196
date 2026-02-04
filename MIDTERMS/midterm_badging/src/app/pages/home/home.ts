import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    latestPosts$;


  constructor(private data: DataService) {
  this.latestPosts$ = this.data.posts$.pipe(
    map((posts: any[]) => posts.slice(0, 5))
  );
}

}
