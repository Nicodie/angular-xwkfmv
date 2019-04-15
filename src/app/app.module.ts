import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//needed for templating
import { HttpClientModule } from '@angular/common/http';//needed for ajax
import { RouterModule } from '@angular/router';//needed for routing
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//need for angular material
import {MatExpansionModule } from '@angular/material';//an angular material component we will use in templating


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
      BrowserAnimationsModule,//dependency for angular material
      MatExpansionModule,//our new ui component
	  HttpClientModule,//import our ajax module
      RouterModule.forRoot(routes)//add our routes to the application
  ],
  declarations: [ AppComponent, PokemonComponent ],//add PokemonComponent to this array
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
