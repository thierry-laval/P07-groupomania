// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// App.js fait appel aux différentes fonctions implémentées dans l'APi : Accès aux images, aux route User, aux route Sauce

// import des modules npm - Ajout des plugins externes

// MODULES
 // Importation d'express => Framework basé sur node.js
const express = require('express');
const app = express();
 // Permet d'extraire l'objet JSON des requêtes POST
const bodyParser = require('body-parser');
// On donne accès au chemin de notre système de fichier
 // Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
const path = require("path");

// utilisation du module 'helmet' pour la sécurité en protégeant l'application de certaines vulnérabilités
// il sécurise nos requêtes HTTP, sécurise les en-têtes, contrôle la prélecture DNS du navigateur, empêche le détournement de clics
// et ajoute une protection XSS mineure et protège contre le reniflement de TYPE MIME
// cross-site scripting, sniffing et clickjacking
const helmet = require("helmet");
const expressSanitizer = require('express-sanitizer');
// FIN MODULES

// IMPORTATION ROUTES
// On importe la route dédiée aux utilisateurs
const userRoutes = require("./routes/user");
// On importe la route dédiée aux posts
const postRoutes = require("./routes/post");
// FIN IMPORTATIONS

// HELMET
// Plugin qui permet de protéger l'application de certaines vulnérabilités en configurant de manière appropriée des en-têtes HTTP.
//protection contre les attaques de type cross-site scripting et autres injections intersites
//Protection coontre les attaques de sniffing et clickjacking

app.use(helmet()); // Protège l'app en paramétrant des Headers (notamment contre les failles XSS)
// FIN HELMET

// PARAMETRAGE DES HEADERS
// Middleware Header pour contourner les erreurs en débloquant certains systèmes de sécurité CORS, afin que tout le monde puisse faire des requetes depuis son navigateur

app.use((req, res, next) => { // Evite les erreurs CORS
// on indique que les ressources peuvent être partagées depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
// on indique les entêtes qui seront utilisées après la pré-vérification cross-origin afin de donner l'autorisation
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
// on indique les méthodes autorisées pour les requêtes HTTP
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
// FIN PARAMETRAGE

// BODYPARSER
// On utilise une méthode body-parser pour la transformation du corps de la requête en JSON, en objet JS utilisable
// Sachant que l'on va créer une requête post pour permettre à l'utilisateur de mettre en ligne une sauce sur la base d'un schéma créer dans Sauce.js
// il va falloir traiter les données associées à cette requête, autrement dit d'extraire l'objet JSON de la demande en provenance du frontend : on aura recours à body-parser.
// Il faut qu'elle soit soit formatée pour être utilisée
app.use(bodyParser.json()); // Rend le corps de la requête exploitable facilement
// FIN BODYPARSER

app.use(expressSanitizer()); // Protège contre les failles XSS

// ROUTES
// Gestion de la ressource image de façon statique
// Midleware qui permet de charger les fichiers qui sont dans le repertoire images
app.use("/images", express.static(path.join(__dirname, "images")));
// Va servir les routes dédiées aux utilisateurs
app.use("/api/user", userRoutes);
// Va servir les routes dédiées aux posts
app.use("/api/post", postRoutes);
// FIN ROUTES

// Export de l'application express pour déclaration dans server.js
module.exports = app;
