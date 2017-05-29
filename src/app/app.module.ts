import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule,JsonpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search.component';
import { HttpService } from './app.service';
import { JsonService } from './genre.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
  
  ],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  
  providers: [HttpService,JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
