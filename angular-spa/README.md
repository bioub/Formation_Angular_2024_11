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

## Forms

Dans `UserAddComponent` ajouter un sous formGroup address avec les champs `city` et `zipcode` (voir la doc :
[https://angular.dev/guide/forms/reactive-forms#example-16]())

`city` doit être obligatoire, `zipcode` doit faire maximum 6 caractères.

Ajouter une méthode `create` dans `UserService` qui va envoyer un user à l'URL `POST https://jsonplaceholder.typicode.com/users`

(voir la doc [https://angular.dev/guide/http/making-requests#mutating-server-state]())

Appeler cette méthode dans `onSubmit` du composant `UserAddComponent` et lorsque tout se passe bien appeler la méthode next du subject comme fait précédemment.
