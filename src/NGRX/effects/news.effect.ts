import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { NewModel } from "src/app/models/new.model";
import * as NewsActions from "../actions/news.action"

@Injectable()
export class NewsEffect
{
    constructor(private action$: Actions, private httpClient: HttpClient){}

    getNews = createEffect(()=> this.action$.pipe(
        ofType(NewsActions.getParginate),
        switchMap((action)=>{
            return this.httpClient.get('https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.per_page}')
        }),
        map((response)=>{
            return NewsActions.getNewsSuccess({news: <Array<NewModel>>response })
        }),
        catchError((error) => of(NewsActions.getNewsFailure({error: error})))
    ))
}
