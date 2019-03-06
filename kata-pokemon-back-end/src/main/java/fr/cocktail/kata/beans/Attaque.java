package fr.cocktail.kata.beans;

public class Attaque {
    
    private long id;
    private String nom;
    private String type;
    private long degats;

    /**
     * @param id
     * @param nom
     * @param type
     * @param degats
     */
    public Attaque(long id, String nom, String type, long degats) {
        super();
        this.id = id;
        this.nom = nom;
        this.type = type;
        this.degats = degats;
    }
    
    public long getId() {
        return this.id;
    }
    
    public void setId(long id) {
        this.id = id;
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
    
    public long getDegats() {
        return this.degats;
    }
    
    public void setDegats(long degats) {
        this.degats = degats;
    }
    
}
