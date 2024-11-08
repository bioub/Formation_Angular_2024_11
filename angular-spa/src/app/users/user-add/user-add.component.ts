import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {

  private userService = inject(UserService);

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    // TODO
    // Envoyer une requete POST vers https//jsonplaceholder.typicode.com/users
    // Si ça se passe bien
    // Ajouter le user créé au menu de gauche

    this.userService.userAdded$.next({
      id: 11,
      name: 'Romain',
    });
  }
}
