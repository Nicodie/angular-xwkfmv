import { Component, OnInit } from '@angular/core';

//standard component boilerplate code
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',//associated html file
  styleUrls: ['./pokemon.component.css']//associated css file
})
export class PokemonComponent {
  constructor() { }
  ngOnInit() {}
}