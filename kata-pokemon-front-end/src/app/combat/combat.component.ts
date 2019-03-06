import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../service/pokemon.service';
import {Pokemon} from '../service/pokemon';
import {Attaque} from '../service/attaque';
import {Combat} from '../service/combat';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  combatLance: boolean;
  combat: Combat;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.combatLance = false;
  }

  lancerCombat() {
    this.pokemonService.lancerCombat().subscribe(reponse => {
      this.combat = reponse;
      this.combatLance = true;
    });
  }

  lancerAttaqueSurPokemon(pokemonAttaquant: Pokemon, attaque: Attaque, pokemonRecevantAttaque: Pokemon) {
    this.pokemonService.lancerAttaque(pokemonAttaquant, attaque, pokemonRecevantAttaque).subscribe(reponse => {
      this.combat = reponse;
    });
  }

  pourcentageViePokemon(pokemon: Pokemon): number {
    if (pokemon.vieActuelle === 0) {
      return 0;
    }
    return (pokemon.vieActuelle / pokemon.vieMaximale) * 100;
  }

  typeCouleurViePokemon(pokemon: Pokemon): string {
    if (this.pourcentageViePokemon(pokemon) > 30) {
      return 'primary';
    }
    return 'warn';
  }

}
