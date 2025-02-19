import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {

  clickName(frase: string){
    console.log(frase);
  }

  public pokemons = [
    {name: 'Pikachu', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfzYtn-eRiOeIygbWQ6S5yecoe-TpaJGngA&s', habilities: ['Electrico']},
    {name: 'Charmander', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVFNKUT6OcGKlCRlHkyDawCkLEX4fPpQsEw&s', habilities: ['Fuego']},
    {name: 'Bulbasaur', src: 'data:image/jpeg;base64,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', habilities: ['Planta', 'Veneno']},
    {name: 'Squirtle', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7o9txqNIUebeCII7sORTybNQT_pZqCbZGFg&s', habilities: ['Agua']}
  ]

 }
