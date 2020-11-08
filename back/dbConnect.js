// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// MODULES
const mysql = require('mysql');
const env = require('./environment'); // Récupère les variables d'environnement
// FIN MODULES

// CONNEXION BASE DE DONNEE
exports.connection = mysql.createPool({
    host     : 'localhost',
    user     : `${env.dbId}`,
    password : `${env.dbPW}`,
    database : 'Groupomania',
    timezone : 'local',
    charset : 'utf8mb4'
  });

// FIN CONNEXION
