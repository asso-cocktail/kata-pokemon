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
  pokemonAyantRecuAttaque: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.combatLance = false;
  }

  lancerCombat() {
    this.pokemonService.initialiserCombat().subscribe(reponse => {
      this.combat = reponse;
      this.combatLance = true;
      this.pokemonAyantRecuAttaque = null;
    });
  }

  lancerAttaqueSurPokemon(pokemonAttaquant: Pokemon, attaque: Attaque, pokemonRecevantAttaque: Pokemon) {
    this.pokemonService.lancerAttaque(pokemonAttaquant, attaque, pokemonRecevantAttaque).subscribe(reponse => {
      this.combat = reponse;
      this.pokemonAyantRecuAttaque = pokemonRecevantAttaque;
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

  classForPokemon(pokemon: Pokemon) {
    if (pokemon && this.pokemonAyantRecuAttaque) {
      if (pokemon.id === this.pokemonAyantRecuAttaque.id) {
        if (pokemon.vieActuelle <= 0) {
          return 'ko';
        }
        return 'blesse';
      } else if (pokemon.vieActuelle <= 0) {
        return 'disparu';
      }
    }
  }

  nePeutPasLancerAttaque(pokemon: Pokemon): boolean {
    if (pokemon.vieActuelle <= 0) {
      return true;
    }
    if (!this.pokemonAyantRecuAttaque) {
      return false;
    }
    if (this.combat.equipePokemon1 && this.combat.equipePokemon2) {
        const pok1: Pokemon[] = this.combat.equipePokemon1.filter(
            pokemonDeLequipe => pokemonDeLequipe.id === pokemon.id || pokemonDeLequipe.id === this.pokemonAyantRecuAttaque.id
        );
        const pok2: Pokemon[] = this.combat.equipePokemon2.filter(
            pokemonDeLequipe => pokemonDeLequipe.id === pokemon.id || pokemonDeLequipe.id === this.pokemonAyantRecuAttaque.id
        );
        if (pok1.length === 2 || pok2.length === 2) {
            return false;
        }
    }
    if (this.pokemonAyantRecuAttaque.id === pokemon.id) {
      return false;
    }
    return true;
  }

  pokemonsPouvantEtreAttaques(pokemons: Pokemon[]) {
    const pokemonsPouvantEtreAttaques: Pokemon[] = [];
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].vieActuelle > 0) {
        pokemonsPouvantEtreAttaques.push(pokemons[i]);
      }
    }
    return pokemonsPouvantEtreAttaques;
  }

  libelleBoutonAttaque(attaque: Attaque, pokemonRecevantAttaque: Pokemon, pokemonsAdverses: Pokemon[]): string {
      const nbPokemonsPouvantEtreAttaques = this.pokemonsPouvantEtreAttaques(pokemonsAdverses).length;
      if (nbPokemonsPouvantEtreAttaques > 1) {
        return attaque.nom + ' (' + attaque.degats + ') -> ' + pokemonRecevantAttaque.nom;
      }
      return attaque.nom + ' (' + attaque.degats + ')';
  }
}
