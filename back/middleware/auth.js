// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// Middleware qui protégera les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.

// MODULES

const env = require("../environment"); // Récupère les variables d'environnement
const jwt = require("jsonwebtoken"); // Crée et check un token d'identification sécurisé

// On vérifie le TOKEN de l'utilisateur, s'il correspond à l'id de l'utilisateur dans la requête, il sera autorisé à changer les données correspondantes.

// FIN MODULES

// MIDDLEWARE AUTH

// Ce middleware sera appliqué à toutes les routes afin de les sécuriser - Vérification de l'utilisateur
module.exports = (req, res, next) => { // Vérifie si le token est bon
    try { // Vérifie si le token est bon grâce à notre phrase secrète
        const token = req.headers.authorization.split(" ")[1]; // Récupére le token dans l'entête
        const decodedToken = jwt.verify(token, env.token); // On vérifie le token avec la clé pour le lire
        res.locals.userID = decodedToken.userID; // Le token devient un objet JS classique qu'on place dans une constante, et on y récupère l'user ID pour comparaison
        next();
    } catch{// probleme d'autentification si erreur dans les inscrutions on renvoie le statut 401 non autorisé
        res.status(401).json({message: 'Requête non authentifiée !'});
    }
};

// FIN MIDDLEWARE
