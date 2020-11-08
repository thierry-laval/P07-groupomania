// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// MODULES
// Ajout de plugin externe nécessaire pour utiliser le router d'Express
const express = require("express");
// Appel du routeur avec la méthode mise à disposition par Express
const router = express.Router();
// FIN MODULES

// IMPORTATION CONTROLLERS
const postCtrl = require("../controllers/post");
// FIN IMPORTATION

// IMPORTATION MIDDLEWARES
// On importe le middleware auth pour sécuriser les routes
const auth = require("../middleware/auth"); // Crée un token d'identification
//On importe le middleware multer pour la gestion des images
const multer = require("../middleware/multer-config"); // Permet d'envoyer un fichier dans la requête
// FIN IMPORTATION


// En exportant dans le controller la logique métier, les fonctions, on voit plus clairement quelles sont les routes dont on dispose
// et on utilisera une sémantique très claire pour comprendre ce qu'elles permettent.
// On a quelque chose de plus modulaire plus facile à comprendre et plus facile à maintenir

// ROUTES
// Création des différentes ROUTES de l'API en leurs précisant, dans l'ordre, leurs middlewares et controllers
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.post("/", auth, multer, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.post("/:id/comment", auth, postCtrl.createComment);
router.post("/:id/reaction", auth, postCtrl.reactPost);
// FIN ROUTES

module.exports = router;
