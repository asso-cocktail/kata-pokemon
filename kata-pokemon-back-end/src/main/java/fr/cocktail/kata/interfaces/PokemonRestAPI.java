package fr.cocktail.kata.interfaces;

import fr.cocktail.kata.beans.Combat;

public interface PokemonRestAPI {

    Combat lancerCombat();
    
    Combat lancerAttaque(Long idPokemonAttaquant, Long idAttaque, Long idPokemonRecevantAttaque);
    
}
