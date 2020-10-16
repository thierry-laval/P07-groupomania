# ![left 100%](https://github.com/thierry-laval/archives/blob/master/images/Logo_OpenClassrooms.png?raw=true) OpenClassrooms-Développeur Web

_`Début de formation le 20/04/2020`_

### Auteur

👤**Thierry LAVAL** [🇫🇷 Contactez moi 🇬🇧](<thierrylaval@gmx.com>)

* Github: [@Thierry Laval](https://github.com/thierry-laval)
* LinkedIn: [@Thierry Laval](https://www.linkedin.com/in/thierry-laval)
***

## 📎 Projet 7 - Création d'un réseau social d’entreprise
![left 100%](https://github.com/thierry-laval/archives/blob/master/images/logo-groupomania-red.png?raw=true)

Le projet 7 consiste à construire  (Frontend et Backend) un réseau social interne pour les employés de Groupomania.
Utiliser une organisation “agile”. Carte blanche avec quelques orientations.
L'un des employés du groupe testera un MVP du produit.

### Objectifs et Compétences évalué

* Gérer un stockage de données à l'aide de SQL
* Personnaliser le contenu envoyé à un client web
* Implémenter un stockage de données sécurisé en utilisant SQL
* Authentifier un utilisateur et maintenir sa session

***

## 🔨 Installation ##

### Pré requis

* Cloner le repository : <https://github.com/thierry-laval/groupomania>
* NPM install Node JS doit être installé localement sur la machine ainsi que MySQL
* Côté backend, plusieurs dépendances npm ont été nécessaires : - Bcrypt - Body-Parser - Express - jsonwebtoken - Multer - Bouncer - Helmet - password validator - Nodemon

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

***Pour tester les fonctionnalités de l'app voir les étapes suivantes :***
* Créez un fichier nommé *.env* dans le dossier back
> back
>> app.js\
>> **.env**\
>> server.js

Y insérer directement ces 3 variables d'environnements:\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_ID=adminP7\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_PW=P7Groupomania\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOKEN=Ce_que_vous_voulez

- Puis créez la base de donnée avec le fichier *createDatabse.sql*
```
SOURCE yourPath/createDatabase.sql;
```


***

### Utilisé dans ce projet

* Voir : [Le projet 7 "Groupomania" sur OpenClassrooms](https://openclassrooms.com/fr/paths/185/projects/677/assignment "Cliquez pour voir le projet")
* Voir : [La note de cadrage donnée par le client](documents/Groupomania_Specs_FR_DWJ_VF.pdf)

| Languages       | et             | outils                 |
| :-------------: |:-------------: | :-----:                |
| HTML5           | Node.js        | Vue.js ou express      |
| CSS3            | Git/GitHub     | MySQL                  |
| Java-script     | SASS           |  Visual Studio Code    |
|       xXx       |       xXx      |        xXx             |

***

### 🚦Les documents de présentation de la soutenance

→ [Voir le lien vers le dépot sur Github]()\
→ [Voir le plan de test en ligne]()\
→ [Voir l'organigramme en ligne]()

***
<p>&hearts; Love Markdown<p>
