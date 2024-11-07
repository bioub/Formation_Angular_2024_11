# Exercices

## Router

Créer un nouveau dossier `users` dans `app`.

Dans le dossier `users` générer 3 composants :

- `users/users.component.ts|scss|html`
- `users/user-add/user-add.component.ts|scss|html`
- `users/user-details/user-details.component.ts|scss|html`

Configurer les routes dans `app.routes.ts` de sorte que :

`/users` -> `UsersComponent`
`/users/add` -> `UserAddComponent`
`/users/123` -> `UserDetailsComponent`

Ajouter un lien vers `/users` dans le menu de `app.component.html`

