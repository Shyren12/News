import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import * as NewsActions from "../actions/news.action"
import { NewsState } from "../states/news.state";

const initialState: NewsState ={
    news: [],
    numOfNews : 0,
    loading: false,
    error: '',
    isSuccess: true
}

export const newsReductor = createReducer
(
    initialState,
    on(NewsActions.getParginate, (state)=>{
        return{...state, loading: true}
    }),
    on(NewsActions.getNewsSuccess, (state,action) =>{
        return{ ...state, news: action.news, loading: false, isSuccess: true, numOfNews: action.news.length}
    }),
    on(NewsActions.getNewsFailure, (state, action) => {
        return{ ...state, error: action.error, loading: false, isSuccess: false}
    })
)