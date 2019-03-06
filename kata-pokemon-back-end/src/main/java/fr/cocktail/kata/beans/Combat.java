package fr.cocktail.kata.beans;

public class Combat {

    private Pokemon pokemon1;
    private Pokemon pokemon2;

    /**
     * @param pokemon1
     * @param pokemon2
     */
    public Combat(Pokemon pokemon1, Pokemon pokemon2) {
        super();
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    public Pokemon getPokemon1() {
        return this.pokemon1;
    }

    public void setPokemon1(Pokemon pokemon1) {
        this.pokemon1 = pokemon1;
    }

    public Pokemon getPokemon2() {
        return this.pokemon2;
    }

    public void setPokemon2(Pokemon pokemon2) {
        this.pokemon2 = pokemon2;
    }

}
