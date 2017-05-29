import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
 { path: '' , redirectTo: '/search' , pathMatch: 'full'},
{ path: 'search', component:SearchComponent },
//{ path: '/addToFavourite', component:AddToFavourite_component}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
    







