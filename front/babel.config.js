// En ajoutant un fichier babel. config. js,
// Babel résoudra facilement la configuration au lieu de chercher dans chaque fichier
// jusqu'à ce qu'il trouve le code de configuration.
// Mais cela permettrait également de tirer parti d'une nouvelle option de configuration, overrides
// Dans ce cas ajout de vue.

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
};
