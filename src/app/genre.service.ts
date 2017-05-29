import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchComponent } from './search.component';

@Injectable()
export class JsonService{
   // private _url:string="https://api.themoviedb.org/3/search/movie?api_key=ebaa8b305195e960d6b456f79295f4a1&language=en-US&query=End&page=1&include_adult=false"
    
constructor(private http:Http){}
   getApi(){
       return this.http.get('http://localhost:3000/genres')
       .map((response:Response)=>response.json());
   }
}
