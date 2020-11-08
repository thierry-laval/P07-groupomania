// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval

// MODULES
const dotenv = require("dotenv").config();
// FIN MODULES

module.exports = {
    dbId: process.env.DB_ID,
    dbPW: process.env.DB_PW,
    token: process.env.TOKEN
}
