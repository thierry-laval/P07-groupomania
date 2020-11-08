// Formation OpenClassrooms - Développeur Web - Projet 7 - Thierry Laval
// le main.js est le fichier “racine” de l’application. C’est lui qui va faire le lien entre la vue et le modèle

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// IMPORT AXIOS ET CONFIGURATION
//Axios est une bibliothèque JavaScript fonctionnant comme un client HTTP.
//Elle permet de communiquer avec des API en utilisant des requêtes.
//Comme avec les autres clients HTTP, il est possible de créer des requêtes avec la méthode POST.
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/api/';
const token = sessionStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
Vue.prototype.$axios = axios;
// FIN AXIOS

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
