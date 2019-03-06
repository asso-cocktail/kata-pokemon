package fr.cocktail.kata.beans;

import java.util.List;

public class Pokemon {
    private long id;
    private long numero;
    private String nom;
    private String type;
    private String urlImage;
    private long vieMaximale;
    private long vieActuelle;
    private List<Attaque> attaques;
    
    /**
     * @param id
     * @param numero
     * @param nom
     * @param type
     * @param urlImage
     * @param vieMaximale
     * @param vieActuelle
     * @param attaques
     */
    public Pokemon(long id, long numero, String nom, String type, String urlImage, long vieMaximale, long vieActuelle, List<Attaque> attaques) {
        super();
        this.id = id;
        this.numero = numero;
        this.nom = nom;
        this.type = type;
        this.urlImage = urlImage;
        this.vieMaximale = vieMaximale;
        this.vieActuelle = vieActuelle;
        this.attaques = attaques;
    }
    
    public long getId() {
        return this.id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public long getNumero() {
        return this.numero;
    }
    
    public void setNumero(long numero) {
        this.numero = numero;
    }
    
    public String getNom() {
        return this.nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getType() {
        return this.type;
    }
    
    public void setType(String type) {
        this.type = type;
    }
    
    public String getUrlImage() {
        return this.urlImage;
    }
    
    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }
    
    public long getVieMaximale() {
        return this.vieMaximale;
    }
    
    public void setVieMaximale(long vieMaximale) {
        this.vieMaximale = vieMaximale;
    }
    
    public long getVieActuelle() {
        return this.vieActuelle;
    }
    
    public void setVieActuelle(long vieActuelle) {
        this.vieActuelle = vieActuelle;
    }
    
    public List<Attaque> getAttaques() {
        return this.attaques;
    }
    
    public void setAttaques(List<Attaque> attaques) {
        this.attaques = attaques;
    }
    
}
