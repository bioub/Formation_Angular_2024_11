import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user.model';
import { delay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userAdded$ = new Subject<User>();

  private httpClient = inject(HttpClient);

  getAll() {
    // Requete HTTP pour récupérer des users
    // GET https://jsonplaceholder.typicode.com/users
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getById(id: number | string) {
    const user$ = this.httpClient.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (id == 2) {
      return user$.pipe(
        delay(3000),
      );
    }

    return user$;
  }

  create(user: User) {
    return this.httpClient.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }
}
