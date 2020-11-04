# Création d'un réseau social d'entreprise : Cahier des charges

## Principales fonctionnalités
- Création d'utilisateurs (CRUD)
L'acronyme informatique anglais CRUD (pour create, read, update, delete) (parfois appelé SCRUD avec un "S" pour search) désigne les quatre opérations de base pour la persistance des données, en particulier le stockage d'informations en base de données.

Soit :
create : créer
read : lire
update : mettre à jour
delete : supprimer
Plus généralement, il désigne les opérations permettant la gestion d'une collection d'éléments.

- Les utilisateurs pourront
  - Voir les derniers posts de tous les utilisateurs
  - Voir les derniers posts d'un utilisateur en particulier
  - Publier des images/gif
  - Publier du texte
- Sur chaque posts, les utilisateurs pourront
  - Liker / disliker
  - Commenter
  - Supprimer leur propre post/comment/like
- Modération par des administrateurs via la base de donnée qui peuvent
  - Supprimer les posts/commentaires qu'ils jugent inappropriés.
  - Donner/enlever les droits d'admin à un autre utilisateur
- Autres
  - Session persistante au rechargement de la page
  - Système de notification (facultatif)

## Pages
- Login
- Sign-in
- feed d'actualité
  - Liste des derniers posts
  - Like / Comment
- User = utilisateurs
  - Liste les utilisateurs
  - Barre de recherche d'utilisateur
- User/:id = profil d'un utilisateur
  - Modifier les infos
  - CRUD photo de profil
  - Supprimer le compte
- Notification = Page des notifications d'un utilisateur
  - répertorie les derniers commentaires et likes à l'un de ses posts

## Organisation de travail
- AGILE
- Une première version basique (MVP) sera présentée au client
- Le développement se fera selon les requêtes du client
- L'objectif de ce projet est de créer ce premier MVP

```
