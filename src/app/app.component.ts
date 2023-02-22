import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsState } from 'src/NGRX/states/news.state';
import * as NewsActions from "../NGRX/actions/news.action"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'news';

  news$= new Observable<NewsState>

  constructor(private store: Store<{news: NewsState}>){
    this.news$ = this.store.select('news');
  }
  ngOnInit(): void {
   this.getNews();
  }

  getNews()
  {
    this.store.dispatch(NewsActions.getParginate({page: 1, per_page: 5}))
  }
}
