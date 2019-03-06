package fr.cocktail.kata.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;

@Controller("/pokemon") 
public class PokemonController {
    
    private static final Logger LOG = LoggerFactory.getLogger(PokemonController.class);
    
    public PokemonController () {
        super();
    }
    
    @Get("/") 
    @Produces(MediaType.TEXT_PLAIN) 
    public String index() {
        return "Hello World"; 
    }

}
