# ![left 100%](https://github.com/thierry-laval/archives/blob/master/images/Logo_OpenClassrooms.png?raw=true) [OpenClassrooms-Développeur Web](https://openclassrooms.com/fr/paths/185-developpeur-web)

_`Début de formation le 20/04/2020`_

### Auteur

👤**Thierry LAVAL** [🇫🇷 Contactez moi 🇬🇧](<thierrylaval@gmx.com>)

* Github: [@Thierry Laval](https://github.com/thierry-laval)
* LinkedIn: [@Thierry Laval](https://www.linkedin.com/in/thierry-laval)

***

## 📎 Projet 7 - Création d'un réseau social d’entreprise

![left 100%](https://github.com/thierry-laval/archives/blob/master/images/logo-groupomania-red.png?raw=true)

Le projet 7 consiste à construire  (Frontend et Backend) un réseau social interne pour les employés de Groupomania. En utilisant une organisation "agile", nous avons "Carte blanche" avec quelques orientations et contraintes.

* Fonction, partager/commenter des gifs genre le site 9GAG.
* Fonction, écrire/partager des articles à la façon de Reddit.
* Utiliser le langage SQL pour le stockage de données.
* Les données de connexion doivent être sécurisées.

L'un des employés du groupe testera un MVP du produit avec une seule des deux fonctions demandées.

* <span style="color:green">Nous avons choisi de presenter " Pouvoir partager et commenter des gifs ".</span>

### Objectifs et Compétences évalué

* Gérer un stockage de données à l'aide de SQL
* Personnaliser le contenu envoyé à un client web
* Implémenter un stockage de données sécurisé en utilisant SQL
* Authentifier un utilisateur et maintenir sa session

***

## 🔨 Installation

### Pré requis

* Cloner le repository : <https://github.com/thierry-laval/groupomania>
* Installer Node.js
* Installer Vue.js
* Installer MySQL

La sauvegarde de la base de données ***createDatabase.sql*** doit être importée

### Lancement du Backend et Frontend

* Dans le terminal, lancer les commandes suivantes sur chaques dossiers :

|![icon](https://www.google.com/url?sa=i&url=https%3A%2F%2Fkorben.info%2Fhyper-un-terminal-entierement-customisable-selon-vos-envies-et-besoins.html&psig=AOvVaw3kl1CIIDf3COpDb5_ldtIz&ust=1604765258936000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD7-Mum7uwCFQAAAAAdAAAAABAF)|Pour installer Node|Pour lancer le serveur|
|-:|:-|:-|
|&ensp;&ensp;&ensp;**Backend :**|```npm install```|```npm start```|
|&ensp;&ensp;&ensp;**Frontend :**|```npm install```|```npm run serve```|

***Pour tester les fonctionnalités de l'application voir les étapes suivantes :***

* Créez un fichier nommé *.env* dans le dossier back.
  * Insérer directement ces 3 variables d'environnements :

```bash
DB_ID=adminP7\
DDB_PW=P7Groupomania\
DTOKEN=Ce_que_vous_voulez
```

* Puis créez la base de donnée avec le fichier *createDatabse.sql*

```bash
Dossier source/createDatabase.sql
```

* Ou utiliser la base de donnée avec les exemples *Groupomania.sql*

```bash
Dossier source/Groupomania.sql
```

&nbsp;&nbsp;&nbsp;&nbsp;Utilisateurs et publications inclus pour les tests.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se connecter avec le login :

| email                         | Mot de passe    |
| :-------------:               |:--------------: |
| thierrylaval@egroupomania.com | Password1       |
| audrey@groupomania.com        | Password2       |

* Ouvrez votre navigateur et allez sur : [`http://localhost:8080`](http://localhost:8080)

***

### Utilisé dans ce projet

* Voir : [Le projet 7 "Groupomania" sur OpenClassrooms](https://openclassrooms.com/fr/paths/185/projects/677/assignment "Cliquez pour voir le projet")
* Voir : [Les spécifications fonctionnelles donnée par le client](documents/spécifications_fonctionnelles.pdf)

| Languages       | et              | outils             |
| :-------------: |:--------------: | :-----------------:|
| HTML5           | Node.js         | Git/GitHub         |
| CSS3            | Vue.js          | Visual Studio Code |
| Javascript      | Sequel pro      | WCAG               |
|    xXx          | MySQL           |        xXx         |

***

### 🚦Les documents de présentation de la soutenance

→ [Voir le livrable vers le dépot Github](https://drive.google.com/file/d/1uRs-CGkFYUx9aoAnSZMdF7mUoGSN-t35/view?usp=sharing)\
→ [Voir les spécifications fonctionnelles](https://drive.google.com/file/d/1ogmYbvEXu72UdZ3kIGqS7rJgWEMv30YE/view?usp=sharing)\
→ [Voir le cahier des charges](https://drive.google.com/file/d/1dLUPhbu7G1aJtyz3LPYVS6XStUyvMCpL/view?usp=sharing)\
→ [Voir l'organisation de la base de données MySQL](https://drive.google.com/file/d/1SNtf7pPg3a2kWflZROxpeMX-NJnrykRu/view?usp=sharing)\
→ [Voir le schéma de la base de données](https://drive.google.com/file/d/1x9Ij7Php1TV7sR6mw1ewIZkfhcFOtdhG/view?usp=sharing)\
→ [Voir le guide de construction de l'API](https://drive.google.com/file/d/1QzZhmv7O77IIF2w31jnmaJLWrVmVJupB/view?usp=sharing)

→ **Voir la vidéo de présentation**

* Cette vidéo décrit rapidement les fonctionnalités de l'application vue par les utilisateurs.

[![OpenClassrooms Projet 7](http://img.youtube.com/vi/kXClhebVLUw/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=kXClhebVLUw "Visionnez sur YouTube")

***

&hearts;&nbsp;&nbsp;&nbsp;&nbsp;Love Markdown


&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
Dans le terminal lancer les commandes suivantes :
||Pour installer Node|Pour lancer le serveur|
|-:|:-|:-|
|&ensp;&ensp;&ensp;**Backend :**|```npm install```|```npm start```|
|&ensp;&ensp;&ensp;**Frontend :**|```npm install```|```npm run serve```|

| | | |
|-|-|-|
|  | _"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."_ | |
|
