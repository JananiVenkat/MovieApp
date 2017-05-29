import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchComponent} from './search.component';

@Injectable()
export class HttpService{
   
   constructor(private _http:Http){}
   getHttp(search:string){
       return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=ebaa8b305195e960d6b456f79295f4a1&language=en-US&query='+search+'&page=1&include_adult=false')
       .map((response:Response)=>response.json());
   }
   
}