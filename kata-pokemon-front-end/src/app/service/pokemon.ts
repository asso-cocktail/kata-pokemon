import {Attaque} from './attaque';

export class Pokemon {
  id: number;
  numero: number;
  nom: string;
  type: string;
  urlImage: string;
  vieMaximale: number;
  vieActuelle: number;
  attaques: Attaque[];
}
