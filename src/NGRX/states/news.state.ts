import { NewModel } from "src/app/models/new.model";

export interface NewsState 
{
    news : NewModel[],
    numOfNews : number,
    loading: boolean, 
    error: string,
    isSuccess: boolean,
    
}