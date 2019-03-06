import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Pokemon} from './pokemon';
import {Observable} from 'rxjs';
import {Combat} from './combat';
import {Attaque} from './attaque';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  lancerCombat(): Observable<Combat> {
    return this.http.post<Combat>(environment.api_base_url + '/pokemon/combat', null);
  }

  lancerAttaque(pokemonAttaquant: Pokemon, attaque: Attaque, pokemonRecevantAttaque: Pokemon): Observable<Combat> {
    const params = new HttpParams()
      .set('idPokemonAttaquant', '' + pokemonAttaquant.id)
      .set('idAttaque', '' + attaque.id)
      .set('idPokemonRecevantAttaque', '' + pokemonRecevantAttaque.id)
    ;
    const options = {params: params};

    console.log(environment.api_base_url + '/pokemon/combat/attaque', options);

    return this.http.post<Combat>(environment.api_base_url + '/pokemon/combat/attaque', null, options);
  }

  // getPokemon(nomPokemon: String): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(environment.api_base_url + '/pokemon/' + nomPokemon);
  // }
}
