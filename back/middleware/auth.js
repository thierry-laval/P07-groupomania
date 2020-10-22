// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// Middleware qui protégera les routes sélectionnées et vérifier que l'utilisateur est authentifié avant d'autoriser l'envoi de ses requêtes.

// MODULES

const env = require("../environment"); // Récupère les variables d'environnement
const jwt = require("jsonwebtoken"); // Crée et check un token d'identification sécurisé

// On vérifie le TOKEN de l'utilisateur, s'il correspond à l'id de l'utilisateur dans la requête, il sera autorisé à changer les données correspondantes.

// FIN MODULES

// MIDDLEWARE AUTH

// Ce middleware sera appliqué à toutes les routes afin de les sécuriser
module.exports = (req, res, next) => { // Check si le token est bon
    try { // Check si le token est bon grâce à notre phrase secrète
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, env.token);
        res.locals.userID = decodedToken.userID;
        next();
    } catch{// probleme d'autentification si erreur dans les inscrutions
        res.status(401).json({message: 'Requête non authentifiée !'});
    }
};
// FIN MIDDLEWARE