// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// MODULES
// On importe multer qui est un package qui permet de gérer les fichiers entrants dans les requêtes HTTP
const multer = require('multer');
// FIN MODULES

// DICTIONNAIRE TYPE MIME
// On crée un dictionnaire des types MIME pour définire le format des images autorisées
// Donc la creation d'un objet pour ajouter une extention en fonction du type mime du ficher
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/gif': 'gif',
  'video/mp4': 'mp4'
};
// FIN DICTIONNAIRE

// FONCTION STORAGE
// On crée un objet de configuration pour préciser à multer où enregistrer les fichiers images et les renommer
const storage = multer.diskStorage({ // Configure multer

  // On mets la destination d'enregistrement des images
  destination: (req, file, callback) => { // Indique où enregistrer les fichiers

    // On passe le dossier images qu'on a créé dans le backend
    callback(null, 'images');
  },

  // On dit à multer quel nom de fichier on utilise pour éviter les doublons
  filename: (req, file, callback) => { // Indique le nom du fichier

    // On génère un nouveau nom avec le nom d'origine, on supprime les espaces (white space avec split) et on insère des underscores à la place
    let name = file.originalname.split(' ').join('_'); // Pour éliminer les éventuelles espaces du nom d'origine
    let extension = MIME_TYPES[file.mimetype]; // Défini le type
    name = name.replace("." + extension, "_"); // création du nom final

    // On appelle le callback, on passe null pour dire qu'il n'y a pas d'erreur
    // et on crée le filename en entier, on ajoute un timestamp, un point et enfin l'extension du fichier
    callback(null, name + Date.now() + '.' + extension); // Genère le nom complet du fichier- Nom d'origine + numero unique + . + extension
  }
});
// FIN FONCTION

// Export de l'élément multer, seuls les fichiers de type image seront gérés
module.exports = multer({
  storage: storage
}).single('image');
