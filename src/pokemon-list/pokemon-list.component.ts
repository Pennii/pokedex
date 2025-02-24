import { Component, inject, Input } from '@angular/core';
import { PaginadorComponent } from '../paginador/paginador.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Router } from '@angular/router';
import { BuscadorComponent } from "../buscador/buscador.component";
@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, PaginadorComponent, BuscadorComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  public pokemons: any[] = [];
  private pokemonService = inject(PokemonServiceService);
  private router = inject(Router);
  pages?: any;
  @Input() nombreBuscar: string = '';

  constructor() {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pages = { next: data.next, previous: data.previous };
      this.pokemons = data.results;
    })
  }

  nextPage() {
    if (this.pages.next) {
      this.pokemonService.changePage(this.pages.next).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results;
      })
    }
  }

  prevPage() {
    if (this.pages.previous) {
      this.pokemonService.changePage(this.pages.previous).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results;
      })
    }
  }

  clickName(pokemon: string) {
    this.router.navigate(['/pokemon', pokemon])
  }

  buscar(pokemon: string) {
    this.nombreBuscar = pokemon;
    this.pokemonService.getPokemonListBuscador().subscribe((data) => {
      this.pages = { next: data.next, previous: data.previous };
      this.pokemons = data.results;
    })
    console.log(pokemon)
  }

  /* actualizarIndex(nuevo: number) {
     if (nuevo >= 0 && nuevo < this.pokemons.length) {
       this.index = nuevo;
     }
     console.log(this.index)
   }
 
   index: number = 0;
 
   public pokemons = [
     [
       { name: 'Bulbasaur', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/200px-Bulbasaur.png', habilities: "Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.", tipo: "planta" },
       { name: 'Ivysaur', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/86/latest/20190406151903/Ivysaur.png/200px-Ivysaur.png', habilities: "Cuando el bulbo del lomo crece, le cuesta un poco ponerse de pie sobre las patas traseras.", tipo: "planta" },
       { name: 'Venasaur', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/200px-Venusaur.png', habilities: "Según parece, la flor de Venusaur adquiere unos colores muy vivos con una buena nutrición y mucho sol. El aroma delicado de esta flor calma los ánimos.", tipo: "planta" },
       { name: 'Charmander', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/200px-Charmander.png', habilities: "Este Pokémon nace con una llama en la punta de la cola. Si la llama se apagara, el Pokémon se debilitaría.", tipo: "fuego" },
       { name: 'Charmeleon', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fb/latest/20200411222755/Charmeleon.png/200px-Charmeleon.png', habilities: "Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.", tipo: "fuego" },
       { name: 'Charizard', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/200px-Charizard.png', habilities: "Con las alas que tiene puede alcanzar una altura de casi 1.400 m. Suele escupir fuego por la boca.", tipo: "fuego" },
       { name: 'Squirtle', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20160309230820/Squirtle.png/200px-Squirtle.png', habilities: "Vamo a calmarno", tipo: "agua" },
       { name: 'Wartotle', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d7/latest/20200307022248/Wartortle.png/200px-Wartortle.png', habilities: "Vamo a recalmarno", tipo: "agua" }
     ],
     [
       { name: 'Blastoise', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/41/latest/20200411222955/Blastoise.png/200px-Blastoise.png', habilities: "Te dije que te calmes", tipo: "agua" },
       { name: 'Caterpie', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/05/Caterpie.png', habilities: "Sus cortas patas están recubiertas de ventosas que le permiten subir incansable por muros y cuestas.", tipo: "bicho" },
       { name: 'Metapod', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/6b/latest/20200307022334/Metapod.png/200px-Metapod.png', habilities: "Aunque tiene una coraza muy dura, el cuerpo del Pokémon es blando. Un ataque violento puede acabar con él.", tipo: "bicho" },
       { name: 'Butterfree', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/96/latest/20160703192952/Butterfree.png/200px-Butterfree.png', habilities: "	Tiene las alas protegidas con una capa impermeable, de ahí que pueda volar también cuando llueve.", tipo: "bicho" },
       { name: 'Weedle', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d6/latest/20200307022415/Weedle.png/200px-Weedle.png', habilities: "Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.", tipo: "bicho" },
       { name: 'Kakuna', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/63/latest/20200307022526/Kakuna.png/200px-Kakuna.png', habilities: "Casi incapaz de moverse, este Pokémon sólo puede endurecer su caparazón para protegerse.", tipo: "bicho" },
       { name: 'Beedrill', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/0d/latest/20200307022638/Beedrill.png/200px-Beedrill.png', habilities: "Puede aparecer en enjambres volando a gran velocidad. Suele usar el venenoso aguijón inferior para atacar.", tipo: "bicho" },
       { name: 'Pidgey', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b7/latest/20200307022723/Pidgey.png/200px-Pidgey.png', habilities: "A este Pokémon no le gusta luchar. Suele permanecer escondido en zonas de hierba alta. Se alimenta de pequeños insectos.", tipo: "volador" }
     ],
     [
       { name: 'Pidgeotto', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/57/latest/20200307022804/Pidgeotto.png/200px-Pidgeotto.png', habilities: "Muy protector de su amplio territorio, este Pokémon picoteará ferozmente a los intrusos.", tipo: "volador" },
       { name: 'Pidgeot', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a9/latest/20141214190416/Pidgeot.png/200px-Pidgeot.png', habilities: "	Para intimidar a su enemigo, extiende las increíbles alas que tiene. Este Pokémon vuela a una velocidad increíble.", tipo: "volador" },
       { name: 'Rattata', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c4/latest/20200307022853/Rattata.png/200px-Rattata.png', habilities: "Tiene unos largos y afilados colmillos que no dejan de crecer. Le resultan muy útiles para destruir cosas.", tipo: "normal" },
       { name: 'Raticate', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d6/latest/20200307022931/Raticate.png/200px-Raticate.png', habilities: "	Utiliza los bigotes para equilibrarse. Parece que si se los cortan va más despacio.", tipo: "normal" },
       { name: 'Spearow', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a1/latest/20200307023331/Spearow.png/200px-Spearow.png', habilities: "	Va siempre revoloteando de aquí para allá. Aunque frágil, puede ser un duro rival cuando usa Movimiento espejo.", tipo: "volador" },
       { name: 'Fearow', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/41/latest/20200307023409/Fearow.png/200px-Fearow.png', habilities: "	Gracias a sus espléndidas alas puede alcanzar una gran altura y volar durante un día entero sin tener que parar.", tipo: "volador" },
       { name: 'Ekans', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/11/latest/20230716211828/Ekans.png/200px-Ekans.png', habilities: "Es muy silencioso y cauteloso. Come huevos de pájaros como Pidgey y Spearow.", tipo: "veneno" },
       { name: 'Arbok', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4d/latest/20230716211756/Arbok.png/200px-Arbok.png', habilities: "El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.", tipo: "veneno" }
     ],
     [
       { name: 'Pikachu', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/200px-Pikachu.png', habilities: "	Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.", tipo: "electrico" },
       { name: 'Raichu', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/34/latest/20250127090512/Raichu.png/200px-Raichu.png', habilities: "	Suelta descargas eléctricas de hasta 100.000 voltios, con lo que es capaz de derribar al mayor de los Pokémon.", tipo: "electrico" },
       { name: 'Sandshrew', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/df/latest/20230620060651/Sandshrew.png/200px-Sandshrew.png', habilities: "	Se oculta bajo tierra, en zonas áridas y alejadas del agua. Sólo emerge para cazar su comida.", tipo: "tierra" },
       { name: 'Sandslash', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/13/latest/20230620060657/Sandslash.png/200px-Sandslash.png', habilities: "Suele hacerse una bola y rodar a toda velocidad al tiempo que va clavándole las púas y las garras al enemigo.", tipo: "tierra" },
       { name: 'Nidoran♀', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c8/latest/20230613021248/Nidoran%E2%99%80.png/200px-Nidoran%E2%99%80.png', habilities: "No es grande, pero tampoco inofensivo. Las tóxicas púas que tiene son peligrosas. La hembra tiene cuernos pequeños.", tipo: "veneno" },
       { name: 'Nidorina', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/31/latest/20230613021249/Nidorina.png/200px-Nidorina.png', habilities: "	Las hembras tienen una agradable temperatura. Emiten ondas ultrasónicas para confundir al enemigo.", tipo: "veneno" },
       { name: 'Nidoqueen', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20230613021302/Nidoqueen.png/200px-Nidoqueen.png', habilities: "Sus duras escamas le proveen gran protección. Este usa su fuerte corpulencia para ejecutar poderosos movimientos.", tipo: "veneno" },
       { name: 'Nidoran♂', src: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/60/latest/20230613021056/Nidoran%E2%99%82.png/200px-Nidoran%E2%99%82.png', habilities: "	Cambia la orientación de las grandes orejas que tiene para oír mejor. Si se enfada, sus venenosos cuernos crecen.", tipo: "veneno" },
 
     ]
 
   ]*/

}
