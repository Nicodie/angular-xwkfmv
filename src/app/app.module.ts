import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//needed for templating
import { HttpClientModule } from '@angular/common/http';//needed for ajax

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { PokemonComponent} from './pokemon/pokemon.component'; //add this line

@NgModule({
  imports:      [ 
	  BrowserModule, 
	  FormsModule,
	  HttpClientModule //import our ajax module
  ],
  declarations: [ AppComponent, HelloComponent, PokemonComponent ],//add PokemonComponent to this array
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
