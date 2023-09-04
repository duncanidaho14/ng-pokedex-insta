import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './pokemon-list.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemonList(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
