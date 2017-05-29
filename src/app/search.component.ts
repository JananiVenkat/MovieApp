import { Component,OnInit } from '@angular/core';
import { HttpService } from './app.service';
import { JsonService } from './genre.service';


@Component({
    selector: 'my-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
  getdata:string;
  putdata:string;
  values:string;
  jsonApi=[];
  newApi=[];
   onKey(event:any){
    this.values=event.target.value;
}
constructor(private _httpService:HttpService,private _jsonService:JsonService){}
  onTestget(values){
    this._httpService.getHttp(values)
    .subscribe(data=>this.getdata=data.results,

    error=>alert(error),
    ()=>console.log("finished"),
    );    

  }
  getGenre(val){
    let temp=[];
     this.jsonApi.forEach(function(api){
      // if(api.id==this.val)
      if(val.includes(api.id)){
        temp.push(api.name)
        
      }
      });
 return temp;
      
  }

ngOnInit(){
    this._jsonService.getApi().subscribe(resJson=>this.jsonApi=resJson);
  }
 
  }




