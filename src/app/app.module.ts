import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//needed for templating
import { HttpClientModule } from '@angular/common/http';//needed for ajax
import { RouterModule } from '@angular/router';//needed for routing

import { AppComponent } from './app.component';
import { PokemonComponent} from './pokemon/pokemon.component';

//angular routes
const routes = [
  {path:'pokemon', component: PokemonComponent, data: {title:'List of Pokemon'}},
  {path: "**", redirectTo: '/pokemon'}
];

@NgModule({
  imports:[ 
      BrowserModule, 
      FormsModule,
	  HttpClientModule,//import our ajax module
      RouterModule.forRoot(routes)//add our routes to the application
  ],
  declarations: [ AppComponent, PokemonComponent ],//add PokemonComponent to this array
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
