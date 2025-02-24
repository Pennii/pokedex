import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [JsonPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  private router = inject(ActivatedRoute);
  private pokemonService = inject(PokemonServiceService);
  pokemonName: string | null = null;
  pokemon?: any;

  constructor (){
    this.pokemonName = this.router.snapshot.params["pokemonId"]
    this.getPokemonDetail(this.pokemonName);
  }

  getPokemonDetail(pokemonId: string | null): void{
    if (pokemonId) {
      this.pokemonService.getPokemonDetail(pokemonId).subscribe((data) => {
        this.pokemon = data;
      })
    }
  }

 }
