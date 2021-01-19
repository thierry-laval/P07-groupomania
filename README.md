# ![left 100%](https://github.com/thierry-laval/archives/blob/master/images/Logo_OpenClassrooms.png?raw=true) [OpenClassrooms-Développeur Web](https://openclassrooms.com/fr/paths/185-developpeur-web)

_`Début de formation le 20/04/2020`_

### Auteur

👤**Thierry LAVAL** [🇫🇷 Contactez moi 🇬🇧](<thierrylaval@gmx.com>)

* Github: [@Thierry Laval](https://github.com/thierry-laval)
* LinkedIn: [@Thierry Laval](https://www.linkedin.com/in/thierry-laval)

***

## 📎 Projet 7 - Création d'un réseau social d’entreprise

![left 100%](front/public/sharePic.png?raw=true)
<!--Ancien logo modifié ![left 100%](https://github.com/thierry-laval/archives/blob/master/images/logo-groupomania-red.png?raw=true)-->

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

* Cloner la branche "master" de ce dépôt github
* Installer Node.js
* Installer Vue.js
* Installer MySQL

Une des sauvegardes de base de données devra être importée

```source/bd/createDatabase.sql``` - Sans exemple

```source/bd/Groupomania.sql``` - Avec des exemples
### Lancement du Backend et Frontend

* Dans le terminal, lancer les commandes suivantes sur chaques dossiers :

|![icon du terminal](https://github.com/thierry-laval/archives/blob/master/images/terminal2.gif?raw=true)|Pour installer Node<br>(une seule fois)|Pour lancer le serveur|
|:-:|:-:|:-:|
|Sur le dossier **Back** :|```npm install```|```npm start```|
|Sur le dossier **Front** :|```npm install```|```npm run serve```|

***Pour tester les fonctionnalités de l'application voir les étapes suivantes :***

* Créez un fichier nommé **```.env```** dans le dossier back (Ou utiliser celui déja installé pour faciliter).
  * Insérer directement ces 3 variables d'environnements

```bash
DB_ID=adminP7\
DDB_PW=P7Groupomania\
DTOKEN=Ce_que_vous_voulez
```

* Puis créez la base de données avec le fichier **createDatabse.sql**

```bash
Dossier source/bd/createDatabase.sql
```

* Ou utiliser la base de données avec les exemples **Groupomania.sql**

```bash
Dossier source/bd/Groupomania.sql
```

&nbsp;&nbsp;&nbsp;&nbsp; Dans ce cas, vous aurez des utilisateurs et des publications inclus pour les tests.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se connecter avec le login :

| email                         | Mot de passe    |
| :-------------:               |:--------------: |
| thierrylaval@egroupomania.com | Password1       |
| audrey@groupomania.com        | Password2       |

* Ouvrez votre navigateur et allez sur : [`http://localhost:8080`](http://localhost:8080)

#### Administrateur/Modérateur

* Pour administrer les posts, un role de modérateur est attribué au premier compte créer. Il pourra être changer vis la bd sql.
  * Dans le cadres de l'utilisation de la bd ```Groupomania.sql``` (avec les exemples déja préts) le compte thierrylaval@groupomania.com est administrateur.

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

→ **Liste des dépendances et documentations**

|                                                                   |                                                                          |
|------------------------------------------------------------------ |--------------------------------------------------------------------------|
| express : [d​ocumentation](https://www.npmjs.com/package/express)  | sequelize   : ​[d​ocumentation](https://www.npmjs.com/package/sequelize)   |
| bcrypt  : [d​ocumentation](https://www.npmjs.com/package/bcrypt)   | jsonwebtoken: [d​ocumentation](https://www.npmjs.com/package/jsonwebtoken)|
| dotenv  : [d​ocumentation](https://www.npmjs.com/package/dotenvh)  | body-parser : ​[d​ocumentation](https://www.npmjs.com/package/body-parser) |
| helmet  : ​[d​ocumentation](https://www.npmjs.com/package/helmet)   | nodemon     : ​[d​ocumentation](https://www.npmjs.com/package/nodemon)     |

<!--
● express     : [d​ocumentation](https://www.npmjs.com/package/express)\
● sequelize   : ​[d​ocumentation](https://www.npmjs.com/package/sequelize)\
● bcrypt      : [d​ocumentation](https://www.npmjs.com/package/bcrypt)\
● jsonwebtoken: [d​ocumentation](https://www.npmjs.com/package/jsonwebtoken)\
● dotenv      : [d​ocumentation](https://www.npmjs.com/package/dotenvh)\
● body-parser : ​[d​ocumentation](https://www.npmjs.com/package/body-parser)\
● helmet      : ​[d​ocumentation](https://www.npmjs.com/package/helmet)\
● nodemon     : ​[d​ocumentation](https://www.npmjs.com/package/nodemon)\
-->

***

&hearts;&nbsp;&nbsp;&nbsp;&nbsp;Love Markdown
