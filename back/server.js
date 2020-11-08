// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

/**
 * @name : groupomania
 * @create : 5/10/2020
 * @version : 1.0.0
 * @author : Thierry Laval
 * @depot : <https://github.com/thierry-laval/groupomania>
 * @licence : MIT <https://mit-license.org/>
 */

// MODULES
const http = require('http'); // Import du package http - https requiert un certificat SSL à obtenir avec un nom de domaine
const app = require('./app'); // Import de app pour utilisation de l'application sur le serveur
//FIN MODULES

// FONCTION NORMALIZEPORT
const normalizePort = val => { // Renvoie un port valide
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
//FIN FONCTION

// DEFINITION DU PORT
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
// FIN DEFINITION

// FONCTION ERRORHANDLER
const errorHandler = error => { // Gère les erreurs
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
// FIN FONCTION

// CREATION SERVEUR
const server = http.createServer(app); // https requiert un certificat SSL à obtenir avec un nom de domaine
server.on('error', errorHandler); // Gère les erreurs
server.on('listening', () => { // Consigne le port ou canal dans la console
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

// Le serveur écoute le port définit plus haut
server.listen(port);
// FIN CREATION
