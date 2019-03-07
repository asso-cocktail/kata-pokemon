# Utilisation du kata pokemon

## Back-end

Le back-end utilise le framework [Micronaut](https://micronaut.io/)

### Installation de Micronaut

#### Avec Sdkman

Assurez-vous d'avoir la derniere version de sdkman installée
```bash
sdk update
```

Puis lancez la commande suivante pour installer micronaut
```bash
sdk install micronaut
```

#### Autres manières d'installer

Voir la [documentation d'installation](https://docs.micronaut.io/latest/guide/index.html#quickStart)

### Lancement de Micronaut

Déplacez-vous dans le dossier kata-pokemon-back-end
```bash
cd kata-pokemon-back-end
```

Lancez l'application
```bash
./gradlew run
```

### Divers

**Attention** : à chaque modification de code il faudra relancer l'application micronaut.

## Front-end

Le front est en angular 7

### Installation d'angular

```bash
npm install -g @angular/cli
```

Voici la [documentation d'installation](https://angular.io/guide/quickstart)

### Lancement de l'application 

Déplacez-vous dans le dossier kata-pokemon-front-end
```bash
cd kata-pokemon-front-end
```

Lancez l'application
```bash
ng serve --open
```

## Postman

Postman est un outil de test des API. Il nous servira pour tester les API créées dans ce kata.\
Postman est téléchargeable [ici](https://www.getpostman.com/downloads/).


## Exercice

Faire fonctionner le combat entre deux pokémons.

* Tester avec Postman que l'appel `GET` à `http://localhost:8080/pokemon` retourne bien `Hello World`
* Modifier la classe `PokemonController` en lui faisant implémenter l'interface `PokemonRestAPI`
* Implémenter `initialiserCombat()` et tester avec Postman
  * L'url de l'image d'un pokemon peut s'obtenir de la maniere suivante `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + numero + ".png"`
* Vérifier que le combat démarre dans l'application lors du clic sur le bouton `Lancer un nouveau combat`
* Implémenter `lancerAttaque` pour infliger des dégats à un pokemon et tester avec Postman
* Verifier qu'un pokémon perd de la vie lors d'une attaque dans l'application