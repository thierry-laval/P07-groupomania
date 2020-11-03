# ![left 100%](https://github.com/thierry-laval/archives/blob/master/images/Logo_OpenClassrooms.png?raw=true) OpenClassrooms-Développeur Web

_`Début de formation le 20/04/2020`_

### Auteur

👤**Thierry LAVAL** [🇫🇷 Contactez moi 🇬🇧](<thierrylaval@gmx.com>)

* Github: [@Thierry Laval](https://github.com/thierry-laval)
* LinkedIn: [@Thierry Laval](https://www.linkedin.com/in/thierry-laval)
***

## 📎 Projet 7 - Création d'un réseau social d’entreprise
![left 100%](https://github.com/thierry-laval/archives/blob/master/images/logo-groupomania-red.png?raw=true)

Le projet 7 consiste à construire  (Frontend et Backend) un réseau social interne pour les employés de Groupomania. En utilisant une organisation "agile", nous avons "Carte blanche" avec quelques orientations et contraintes.<br>

   - Fonction, partager/commenter des gifs genre le site 9GAG.<br>
   - Fonction, écrire/partager des articles à la façon de Reddit.<br>
   - Utiliser le langage SQL pour le stockage de données.<br>
   - Les données de connexion doivent être sécurisées.<br>

L'un des employés du groupe testera un MVP du produit avec une seule des deux fonctions demandées.

   - <span style="color:green">Nous avons choisi de presenter "Pouvoir partager et commenter des gifs".</span>

### Objectifs et Compétences évalué

* Gérer un stockage de données à l'aide de SQL
* Personnaliser le contenu envoyé à un client web
* Implémenter un stockage de données sécurisé en utilisant SQL
* Authentifier un utilisateur et maintenir sa session

***

## 🔨 Installation ##

### Pré requis

* Cloner le repository : <https://github.com/thierry-laval/groupomania>
* Installer Node.js
* Installer Vue.js
* Installer MySQL

La sauvegarde de la base de données ***createDatabase.sql*** doit être importée

### Lancement du Backend et Frontend

***Backend:***
```
npm install (1 seule fois pour l'installation)
npm start
```

***Frontend:***
```
npm install (1 seule fois pour l'installation)
npm run serve
```

***Pour tester les fonctionnalités de l'application voir les étapes suivantes :***

* Créez un fichier nommé *.env* dans le dossier back.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y insérer directement ces 3 variables d'environnements :
```
DB_ID=adminP7\
DDB_PW=P7Groupomania\
DTOKEN=Ce_que_vous_voulez
```
- Puis créez la base de donnée avec le fichier *createDatabse.sql*
```
Dossier source/createDatabase.sql
```
***

* Ouvrez votre navigateur et allez sur : `http://localhost:8080/`

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

A remplir + tard<br>
→ [Voir le livrable vers le dépot Github](Lien vers la feuille du livrable dans le cloud)\
→ [Voir les spécifications fonctionnelles](mettre le lien vers le plan de test dans le cloud)\
→ [Voir le cahier des charges en ligne](Lien vers le cahier des charges en pdf dans le cloud)
→ [Voir l'organigramme de la bd en ligne](Lien vers l'organisation de la base de données MySQL en pdf dans le cloud)  

→ Voir la vidéo de présentation
<a href="http://www.youtube.com/watch?feature=player_embedded&v=aY_epIW_x0c
" target="_blank" {:target="_blank" }><img src="http://img.youtube.com/vi/aY_epIW_x0c/0.jpg" 
alt="OCR-DevWeb-Projet7" width="240" height="180" border="10" /></a>

***
<p>&hearts; Love Markdown<p>
