import { createAction, props } from "@ngrx/store";
import { NewModel } from "src/app/models/new.model";

// export const getNews = createAction('[News] Get News');
export const getParginate = createAction('[News] Get Parginate',props<{page: number, per_page:number}>());
export const getNewsSuccess = createAction('[News] Get News Success',props<{news: NewModel[] }>());
export const getNewsFailure = createAction('[News] Get News Failure',props<{error: string }>());