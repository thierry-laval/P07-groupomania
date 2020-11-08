// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// Contient les fonctions qui s'appliquent aux différentes routes pour les utilisateurs

// MODULES
// On a besoin d'Express
const express = require("express");
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// FIN MODULES

// IMPORTATION USER CONTROLLERS
// On associe les fonctions aux différentes routes, on importe le controller
const userCtrl = require("../controllers/user");
// FIN IMPORTATION

// IMPORTATION MIDDLEWARES
const auth = require("../middleware/auth"); // Crée un token d'identification
const multer = require("../middleware/multer-config"); // Permet d'envoyer un fichier dans la requête
// FIN IMPORTATION

// ROUTE
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/delete", auth, userCtrl.delete);
router.get("/:id/profile", auth, userCtrl.profile);
router.put("/modify", auth, multer, userCtrl.modify);
// ROUTE

module.exports = router;
